import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(action.payload)
            state.cart.push(action.payload)
        },

        // updateCartItem: (state, action) => {
        //     const itemUpdate = state.find(item => item.id === action.payload.id);
        //     if (itemUpdate) {
        //         itemUpdate.quantity = action.payload.quantity
        //     }
        // },

        // deleteItem: (state, action) => {
        //     state.filter(item => item.id !== action.payload.id)
        // },
        deleteAll: (state, action) => {
            state.cart = []
        }
    }
});