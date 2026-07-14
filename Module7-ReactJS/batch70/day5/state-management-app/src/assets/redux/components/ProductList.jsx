import { useSelector } from "react-redux";
import ProductCard from "./ProductCard.jsx";

function ProductList() {

    const products = useSelector(state => state.shop.products);

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