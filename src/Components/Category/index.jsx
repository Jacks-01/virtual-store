import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';

const Category = () => {
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	console.log(categories);

	return (
		<Container sx={{ mt: '200px' }}>
			<Button
				onClick={(e) => {
					dispatch(changeCategory(`${e.target.textContent}`));
					console.log(e.target);
				}}
			>
				electronics
			</Button>
			<Button>Food</Button>
			<Typography> {categories.currentCategory} </Typography>
			<Typography> Description goes here ...</Typography>
		</Container>
	);
};

export default Category;
