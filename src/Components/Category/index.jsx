import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';
import { filterProducts } from '../../store/products';

const Category = () => {
	const categories = useSelector((state) => state.categories);
	// const products = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	console.log(categories);

	return (
		<Container sx={{ mt: '200px' }}>
			<Typography>BROWSE OUR PRODUCTS</Typography>
			<ButtonGroup variant='text'>
				<Button
					onClick={(e) => {
						dispatch(changeCategory(`${e.target.textContent}`));
						dispatch(filterProducts(`${e.target.textContent}`));
					}}
				>
					electronics
				</Button>

				<Button
					onClick={(e) => {
						dispatch(changeCategory(`${e.target.textContent}`));
						dispatch(filterProducts(`${e.target.textContent}`));
					}}
				>
					food
				</Button>
			</ButtonGroup>

			<Typography> {categories.currentCategory} </Typography>
			<Typography> Description goes here ...</Typography>
		</Container>
	);
};

export default Category;
