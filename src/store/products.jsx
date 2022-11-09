import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [
		{
			name: 'TV',
			description: 'See all the things',
			category: 'electronics',
			price: 599,
            inventory: '5',
            image: `${process.env.PUBLIC_URL}/media/tv.png`
		},
		{
			name: 'MacBook',
			description: 'Do all the things',
			category: 'electronics',
			price: 1499,
            inventory: '9',
            image: `${process.env.PUBLIC_URL}/media/macbook.png`
		},
		{
			name: 'Apple',
			description: 'A simple apple',
			category: 'food',
			price: 3,
			inventory: '5',
			image: `${process.env.PUBLIC_URL}/media/apple.png`
		},
	],
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterProducts: (state, action) => {
			// filter items based on category here
			console.log('products.jsx filter()');
			if (action.payload === 'reset filter') { state.products = [...initialState.products];  return}
			state.products = initialState.products.filter(product => product.category === action.payload)
			console.log(state.products)
		},
	},
});

export const { filterProducts } = productSlice.actions;

export default productSlice.reducer;
