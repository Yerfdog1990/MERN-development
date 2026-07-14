import {ProductList} from "./ProductList.jsx";

export function ProductPage({ products }) {

    // Again...
    // ProductPage doesn't use products.

    // It forwards them.

    return (
        <ProductList products={products} />
    );
}