import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalQuantity: 0,
    items: []
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			console.log('cart.jsx');
			
			
        },

        removeItem: (state, action) => {}
	},
});

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer