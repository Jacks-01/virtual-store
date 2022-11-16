import {
	Button,
	ButtonGroup,
	Typography,
	Container,
	CircularProgress,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';
import { filterProducts } from '../../store/products';
import { useGetCategoryByNameQuery } from '../../store/services/categories';
import { getCategoriesFromApi } from '../../store/categories';
import React, { useEffect } from 'react';

const Category = () => {
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	//* I want to modify this so I can put in arguments later
	const { data, error, isLoading } = useGetCategoryByNameQuery('');
	
	useEffect(() => {
		if (data) dispatch(getCategoriesFromApi([...data.results]));
		else if (isLoading) console.log('LOADING......');
		else if (error) console.log('ERROR IN API CALL:', error);
	}, [data, error, isLoading, dispatch]);

	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{ mt: '2rem', ml: '4rem', mb: '4rem', width: '30vw' }}
			>
				<Grid xs={8}>
					<Typography>BROWSE OUR PRODUCTS</Typography>
					<ButtonGroup variant='text'>
						{error ? (
							<>Oh no, there was an error</>
						) : isLoading ? (
							<Container>
								<CircularProgress
									sx={{ margin: 'auto' }}
									color='secondary'
								/>
							</Container>
						) : data ? (
							categories.cachedCategories.map((category, index) => (
								<Button
									key={`category-${index}`}
									onClick={(e) => {
										dispatch(changeCategory(category));
										dispatch(filterProducts(`${e.target.textContent}`));
									}}
								>
									<Typography
										variant='body2'
										sx={{ padding: '.5rem' }}
									>
										{category.name}
									</Typography>
								</Button>
							))
						) : null}

						<Button
							onClick={(e) => {
								dispatch(filterProducts(`${e.target.textContent}`));
							}}
						>
							reset filter
						</Button>
					</ButtonGroup>
				</Grid>
			</Grid>

			<Container
				maxWidth='xs'
				sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
			>
				<Typography variant='h1'> {categories.currentCategory.name} </Typography>

				<Typography variant='h6'> {categories.currentCategory.description}</Typography>
			</Container>
		</>
	);
};

export default Category;
