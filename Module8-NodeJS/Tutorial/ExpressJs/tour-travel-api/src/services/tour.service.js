const fs = require("node:fs/promises");
const path = require("node:path");
const JsonStore = require("../repositories/JsonStore");
const AppError = require("../utils/AppError");
const logger = require("../utils/logger");
const { buildListResult } = require("../utils/apiFeatures");

const store = new JsonStore("tours.json");
const UPLOAD_DIR = path.join(__dirname, "..", "..", "uploads");

/** Delete an image file, ignoring "already gone" errors. */
async function removeImageFile(filename) {
    if (!filename) return;
    try {
        await fs.unlink(path.join(UPLOAD_DIR, filename));
    } catch (err) {
        if (err.code !== "ENOENT") {
            logger.warn("Could not delete image file", { filename, error: err.message });
        }
    }
}

function slugify(name) {
    return name
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

async function listTours(query) {
    const tours = await store.find();
    return buildListResult(tours, query);
}

async function getTour(id) {
    const tour = await store.findById(id);
    if (!tour) throw new AppError(`No tour found with id ${id}`, 404);
    return tour;
}

async function createTour(data) {
    return store.create({
        ...data,
        slug: slugify(data.name),
        currency: data.currency ?? "USD",
        ratingsAverage: data.ratingsAverage ?? 0,
        ratingsCount: data.ratingsCount ?? 0,
    });
}

async function updateTour(id, data) {
    if (data.name) data.slug = slugify(data.name);
    const tour = await store.update(id, data);
    if (!tour) throw new AppError(`No tour found with id ${id}`, 404);
    return tour;
}

async function deleteTour(id) {
    const tour = await store.findById(id);
    if (!tour) throw new AppError(`No tour found with id ${id}`, 404);
    await store.remove(id);
    // Cleanup: don't leave orphaned image files behind
    await removeImageFile(tour.imageFilename);
}

/**
 * Attach an uploaded image to a tour, replacing (and deleting) any previous one.
 */
async function setTourImage(id, filename) {
    const existing = await store.findById(id);
    if (!existing) {
        // The file was already written by multer — don't leave an orphan
        await removeImageFile(filename);
        throw new AppError(`No tour found with id ${id}`, 404);
    }
    await removeImageFile(existing.imageFilename);
    const tour = await store.update(id, {
        imageFilename: filename,
        imageUrl: `/uploads/${filename}`,
    });
    logger.info("Tour image updated", { tourId: id, filename });
    return tour;
}

/**
 * Aggregate stats grouped by difficulty — the JSON-store equivalent
 * of a MongoDB aggregation pipeline.
 */
async function getTourStats() {
    const tours = await store.find();
    const groups = new Map();

    for (const tour of tours) {
        const key = tour.difficulty;
        if (!groups.has(key)) {
            groups.set(key, { difficulty: key, numTours: 0, totalPrice: 0, minPrice: Infinity, maxPrice: -Infinity, totalRating: 0 });
        }
        const g = groups.get(key);
        g.numTours += 1;
        g.totalPrice += tour.price;
        g.minPrice = Math.min(g.minPrice, tour.price);
        g.maxPrice = Math.max(g.maxPrice, tour.price);
        g.totalRating += tour.ratingsAverage;
    }

    return [...groups.values()]
        .map((g) => ({
            difficulty: g.difficulty,
            numTours: g.numTours,
            avgPrice: Math.round(g.totalPrice / g.numTours),
            minPrice: g.minPrice,
            maxPrice: g.maxPrice,
            avgRating: Number((g.totalRating / g.numTours).toFixed(2)),
        }))
        .sort((a, b) => a.avgPrice - b.avgPrice);
}

module.exports = { listTours, getTour, createTour, updateTour, deleteTour, setTourImage, getTourStats, store };
