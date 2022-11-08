import { Button, ButtonGroup, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory } from '../../store/categories';
import { filterProducts } from '../../store/products';

const Category = () => {
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	console.log(categories);

	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{ mt: '6rem', ml: '4rem', mb: '4rem', width: '30vw' }}
			>
				<Grid xs={8}>
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
				</Grid>
			</Grid>

			<Container maxWidth='xs' sx={{display:'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                <Typography variant='h2'> {categories.currentCategory} </Typography>
                
				<Typography variant='subtitle1'> Description goes here ...</Typography>
			</Container>
		</>
	);
};

export default Category;
