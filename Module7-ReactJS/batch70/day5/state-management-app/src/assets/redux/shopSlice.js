import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({

    name: "shop",

    initialState: {

        user: {
            name: "John"
        },

        products: [
            { id: 1, name: "Laptop" }
        ],

        cart: [],

        orders: [],

        notifications: []
    },

    reducers: {

        addToCart(state, action) {

            // Redux Toolkit uses Immer,
            // so this "mutation" is safe.
            state.cart.push(action.payload);
        }

    }

});

export const {

    addToCart

} = shopSlice.actions;

export default shopSlice.reducer;