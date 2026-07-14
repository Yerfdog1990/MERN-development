const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

/**
 * Tiny persistence layer: an in-memory collection backed by a JSON file.
 * Exposes the same kind of interface a Mongoose model would (find, findById,
 * create, update, remove), so swapping in MongoDB later only means replacing
 * this class — services and controllers stay untouched.
 */
class JsonStore {
    constructor(fileName) {
        this.filePath = path.join(__dirname, "..", "..", "data", fileName);
        this.items = null; // lazy-loaded cache
    }

    async load() {
        if (this.items) return this.items;
        try {
            const raw = await fs.readFile(this.filePath, "utf-8");
            this.items = JSON.parse(raw);
        } catch (err) {
            if (err.code === "ENOENT") {
                this.items = [];
            } else {
                throw err;
            }
        }
        return this.items;
    }

    async persist() {
        await fs.mkdir(path.dirname(this.filePath), { recursive: true });
        await fs.writeFile(this.filePath, JSON.stringify(this.items, null, 2));
    }

    async find() {
        const items = await this.load();
        return [...items];
    }

    async findById(id) {
        const items = await this.load();
        return items.find((item) => item.id === id) ?? null;
    }

    async create(data) {
        const items = await this.load();
        const now = new Date().toISOString();
        const item = {
            id: crypto.randomUUID(),
            ...data,
            createdAt: now,
            updatedAt: now,
        };
        items.push(item);
        await this.persist();
        return item;
    }

    async update(id, data) {
        const items = await this.load();
        const index = items.findIndex((item) => item.id === id);
        if (index === -1) return null;
        // Never allow id/createdAt to be overwritten
        const { id: _id, createdAt: _c, ...safe } = data;
        items[index] = {
            ...items[index],
            ...safe,
            updatedAt: new Date().toISOString(),
        };
        await this.persist();
        return items[index];
    }

    async remove(id) {
        const items = await this.load();
        const index = items.findIndex((item) => item.id === id);
        if (index === -1) return false;
        items.splice(index, 1);
        await this.persist();
        return true;
    }
}

module.exports = JsonStore;
