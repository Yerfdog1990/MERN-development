import ProductCard from "./ProductCard.jsx";
import {StoreContext} from "./StoreContext.jsx";
import {useContext} from "react";

function ProductList() {

    const { products } = useContext(StoreContext);

    return (
        <>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </>
    );
}

export default ProductList;
