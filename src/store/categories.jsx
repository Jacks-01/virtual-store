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
			console.log('categories.jsx changeCategory()');
			state.currentCategory = action.payload
			console.log(action.payload)
			console.log(state.currentCategory)
			
		}
	},
});

export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer