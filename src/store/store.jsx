import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products';
import categoriesReducer from './categories';

export const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoriesReducer,
	},
});
