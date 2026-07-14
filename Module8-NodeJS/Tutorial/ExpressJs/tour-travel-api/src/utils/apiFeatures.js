/**
 * Reusable query features for list endpoints:
 * filtering, gte/lte operators, sorting, field limiting and pagination.
 *
 * Examples:
 *   /tours?destination=Kenya&difficulty=easy
 *   /tours?price[lte]=2000&durationDays[gte]=5
 *   /tours?sort=-price,name
 *   /tours?fields=name,price,destination
 *   /tours?page=2&limit=5
 */
const RESERVED_PARAMS = ["page", "limit", "sort", "fields"];
const OPERATORS = ["gte", "gt", "lte", "lt"];

function applyFilters(items, query) {
    let result = items;

    for (const [key, value] of Object.entries(query)) {
        if (RESERVED_PARAMS.includes(key)) continue;

        // Operator form: price[lte]=2000 arrives as { price: { lte: "2000" } }
        if (typeof value === "object" && value !== null) {
            for (const [op, raw] of Object.entries(value)) {
                if (!OPERATORS.includes(op)) continue;
                const target = Number(raw);
                if (Number.isNaN(target)) continue;
                result = result.filter((item) => {
                    const field = Number(item[key]);
                    if (op === "gte") return field >= target;
                    if (op === "gt") return field > target;
                    if (op === "lte") return field <= target;
                    return field < target;
                });
            }
        } else {
            // Exact match (case-insensitive for strings)
            result = result.filter((item) => {
                const field = item[key];
                if (typeof field === "string") {
                    return field.toLowerCase() === String(value).toLowerCase();
                }
                return String(field) === String(value);
            });
        }
    }
    return result;
}

function applySort(items, sortParam) {
    if (!sortParam) return items;
    const keys = String(sortParam).split(",");
    return [...items].sort((a, b) => {
        for (const key of keys) {
            const desc = key.startsWith("-");
            const field = desc ? key.slice(1) : key;
            const av = a[field];
            const bv = b[field];
            if (av === bv) continue;
            const cmp = av > bv ? 1 : -1;
            return desc ? -cmp : cmp;
        }
        return 0;
    });
}

function applyFieldLimiting(items, fieldsParam) {
    if (!fieldsParam) return items;
    const fields = String(fieldsParam).split(",").map((f) => f.trim());
    if (!fields.includes("id")) fields.unshift("id");
    return items.map((item) =>
        Object.fromEntries(fields.filter((f) => f in item).map((f) => [f, item[f]]))
    );
}

function applyPagination(items, query) {
    const page = Math.max(1, parseInt(query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(query.limit, 10) || 10));
    const start = (page - 1) * limit;
    return {
        data: items.slice(start, start + limit),
        pagination: {
            page,
            limit,
            totalItems: items.length,
            totalPages: Math.max(1, Math.ceil(items.length / limit)),
        },
    };
}

/**
 * Run the full pipeline over an array of items.
 */
function buildListResult(items, query) {
    let result = applyFilters(items, query);
    result = applySort(result, query.sort);
    result = applyFieldLimiting(result, query.fields);
    return applyPagination(result, query);
}

module.exports = { buildListResult };
