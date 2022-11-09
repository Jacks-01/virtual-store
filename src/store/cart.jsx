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
			state.items = [...state.items, { ...action.payload }];
			state.totalQuantity = state.items.length;
			// calculate subtotal
			state.subtotal = state.items.reduce((acc, obj) => {
				return acc + obj.price;
			}, 0);
		},

		removeItem: (state, action) => {},
	},
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
