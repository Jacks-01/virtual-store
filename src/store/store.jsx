import { configureStore } from '@reduxjs/toolkit';
import productReducer from './products';
import categoryReducer from './categories';

export const store = configureStore({
	reducer: {
		products: productReducer,
		category: categoryReducer,
	},
});
