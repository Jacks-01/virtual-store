import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentCategory: '',
	categories: ['electronics', 'food'],
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		changeCategory: (state, action) => {
			// change the current category
			state.currentCategory = action.payload;
		},
	},
});

export const { changeCategory } = categorySlice.actions;

export default categorySlice.reducer;
