import { useDispatch } from "react-redux";
import { addToCart } from "../shopSlice";

function ProductCard({ product }) {

    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(addToCart(product))}
        >
            Add To Cart
        </button>
    );
}

export default ProductCard;