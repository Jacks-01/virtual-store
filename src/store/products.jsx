import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [
		{
			name: 'TV',
			description: 'See all the things',
			category: 'electronics',
			price: 599,
            inventory: 5,
            image: `${process.env.PUBLIC_URL}/media/tv.png`
		},
		{
			name: 'MacBook',
			description: 'Do all the things',
			category: 'electronics',
			price: 1499,
            inventory: 5,
            image: `${process.env.PUBLIC_URL}/media/macbook.png`
		},
		{
			name: 'Apple',
			description: 'A simple apple',
			category: 'food',
			price: 3,
			inventory: 5,
			image: `${process.env.PUBLIC_URL}/media/apple.png`
		},
		{
			name: 'SpongeBob onesie',
			description: 'A sponge named bob',
			category: 'clothing',
			price: 22,
			inventory: 5,
			image: `${process.env.PUBLIC_URL}/media/spongebob.jpg`
		},
		{
			name: 'Plaid onesie',
			description: 'warm and comfy',
			category: 'clothing',
			price: 15,
			inventory: 5,
			image: `${process.env.PUBLIC_URL}/media/plaid.jpg`
		},
		{
			name: 'Candle',
			description: 'smells goooood',
			category: 'candles',
			price: 12,
			inventory: 5,
			image: `${process.env.PUBLIC_URL}/media/candle.jpg`
		},
		{
			name: 'Fleece onesie',
			description: 'soft, yet practical',
			category: 'clothing',
			price: 20,
			inventory: 5,
			image: `${process.env.PUBLIC_URL}/media/fleece.jpg`
		},
		{
			name: 'Soy candle',
			description: 'dont get your nose too close!',
			category: 'candles',
			price: 15,
			inventory: 5,
			image: `${process.env.PUBLIC_URL}/media/soy-candle.jpg`
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
