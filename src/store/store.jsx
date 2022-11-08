import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products';
import categoriesReducer from './categories';
import cartReducer from './cart'

export const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoriesReducer,
		cart: cartReducer
	},
});
