import { useMemo, useState } from "react";

// Categories used to generate many products.
const categories = [
    "Laptop",
    "Smartphone",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Printer",
    "Webcam",
    "Speaker",
    "Tablet",
    "SSD",
];

// Generate 5,000 products.
const products = Array.from({ length: 5000 }, (_, index) => ({
    id: index + 1,
    name: `${categories[index % categories.length]} ${index + 1}`,
}));

function ProductList() {
    // Stores the search text.
    const [filter, setFilter] = useState("");

    // Used only to demonstrate component re-rendering.
    const [darkMode, setDarkMode] = useState(false);

    // ✅ useMemo caches the filtered list.
    // The filtering only happens when either:
    // 1. products changes
    // 2. filter changes
    //
    // Toggling darkMode will NOT execute this code again.
    const filteredProducts = useMemo(() => {
        console.log("Filtering products...");

        return products.filter((product) =>
            product.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [filter]);

    return (
        <div
            style={{
                backgroundColor: darkMode ? "#333" : "#fff",
                color: darkMode ? "#fff" : "#000",
                padding: "20px",
                minHeight: "100vh",
            }}
        >
            <h2>Product Search using useMemo</h2>

            <input
                type="text"
                placeholder="Search products..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />

            <button
                onClick={() => setDarkMode(!darkMode)}
                style={{ marginLeft: "10px" }}
            >
                Toggle Theme
            </button>

            <p>
                Showing {filteredProducts.length} of {products.length} products
            </p>

            <ul>
                {filteredProducts.slice(0, 30).map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <p>
                <em>Only the first 30 matching products are displayed.</em>
            </p>
        </div>
    );
}

export default ProductList;