import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentCategory: '',
	currentDescription: '',
	cachedCategories: [],
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		changeCategory: (state, action) => {
			// change the current category
			console.log('yo yo', state.cachedCategories)
			state.currentCategory = state.cachedCategories.filter(
				(category) => category.name === action.payload
			);
			state.currentDescription = action.payload.description
		},
		getCategoriesFromApi: (state, action) => {
			console.log('yo', action.payload);
			state.cachedCategories = action.payload
			console.log('yo yo yo ', state.cachedCategories)
		},
	},
});

export const { changeCategory, getCategoriesFromApi } = categorySlice.actions;

export default categorySlice.reducer;
