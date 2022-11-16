import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { categoryApi } from './services/categories';

import productReducer from './products';
import categoriesReducer from './categories';
import cartReducer from './cart';

export const store = configureStore({
	reducer: {
		products: productReducer,
		categories: categoriesReducer,
		cart: cartReducer,
		[categoryApi.reducerPath]: categoryApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(categoryApi.middleware),
});


setupListeners(store.dispatch);