const tourService = require("../services/tour.service");
const AppError = require("../utils/AppError");

/**
 * Controllers stay thin: translate HTTP <-> service calls.
 * Express 5 automatically forwards rejected promises from async handlers
 * to the global error middleware — no try/catch or asyncHandler wrapper needed.
 */

async function listTours(req, res) {
    const { data, pagination } = await tourService.listTours(req.query);
    res.json({ status: "success", results: data.length, pagination, data });
}

async function getTour(req, res) {
    const tour = await tourService.getTour(req.params.id);
    res.json({ status: "success", data: tour });
}

async function createTour(req, res) {
    const tour = await tourService.createTour(req.body);
    res.status(201)
        .location(`${req.baseUrl}/${tour.id}`)
        .json({ status: "success", data: tour });
}

async function updateTour(req, res) {
    const tour = await tourService.updateTour(req.params.id, req.body);
    res.json({ status: "success", data: tour });
}

async function deleteTour(req, res) {
    await tourService.deleteTour(req.params.id);
    res.status(204).end();
}

async function getTourStats(req, res) {
    const stats = await tourService.getTourStats();
    res.json({ status: "success", data: stats });
}

async function uploadTourImage(req, res) {
    if (!req.file) throw new AppError("No image file provided. Send it in the \"image\" field", 400);
    const tour = await tourService.setTourImage(req.params.id, req.file.filename);
    res.json({
        status: "success",
        data: {
            imageUrl: `${req.protocol}://${req.get("host")}${tour.imageUrl}`,
            tour,
        },
    });
}

module.exports = { listTours, getTour, createTour, updateTour, deleteTour, getTourStats, uploadTourImage };
