import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [
		{
			name: 'TV',
			description: 'See all the things',
			category: 'electronics',
			price: '$0.00',
            inventory: '5',
            image: `${process.env.PUBLIC_URL}/media/tv.png`
		},
		{
			name: 'MacBook',
			description: 'Do all the things',
			category: 'electronics',
			price: '$0.00',
            inventory: '9',
            image: `${process.env.PUBLIC_URL}/media/macbook.png`
		},
	],
};

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filter: (state) => {
			// filter items based on category here
			console.log('products.jsx filter()');
		},
	},
});

export const { filter } = productSlice.actions;

export default productSlice.reducer;
