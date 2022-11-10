import {
	Button,
	ButtonGroup,
	Typography,
	Container,
	CircularProgress,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';
import { filterProducts } from '../../store/products';
import { useGetCategoryByNameQuery } from '../../store/services/categories';

const Category = () => {
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const { data, error, isLoading } = useGetCategoryByNameQuery('');

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
							data.results.map((category, index) => (
								<Button
									key={`category-${index}`}
									onClick={(e) => {
										dispatch(changeCategory(`${e.target.textContent}`));
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
				<Typography variant='h1'> {categories.currentCategory} </Typography>

				<Typography variant='h6'>
					{' '}
					{categories.currentCategory.description}
				</Typography>
			</Container>
		</>
	);
};

export default Category;
