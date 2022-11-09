import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalQuantity: 0,
	subtotal: 0,
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.totalQuantity = state.items.length;
			state.items = [...state.items, { ...action.payload }];
			// for subtotal use numeral.js
		},

		removeItem: (state, action) => {},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;