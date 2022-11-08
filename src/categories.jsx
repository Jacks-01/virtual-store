import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentCategory: '',
	categories: [{ name: 'electronics' }],
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		changeCategory: (state) => {
			// change the current category
			console.log('categories.jsx changeCategory()')
		}
	},
});

export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer