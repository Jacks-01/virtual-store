import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/cart';
import React from 'react';
import { useGetProductByNameQuery } from '../../store/services/categories';


const Products = () => {
	const { products } = useSelector((state) => state.products);
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const { data, error, isLoading } = useGetProductByNameQuery('');
	console.log(data, isLoading, error)
	console.log(products);
	console.log(categories);

	return (
		<>
			<Container maxWidth='md'>
				<Grid
					container
					spacing={4}
				>
					{products.map((product, index) => (
						<Grid>
							<Card
								key={index}
								sx={{ maxWidth: 345, mt: '100px' }}
							>
								<CardMedia
									component='img'
									height='140'
									image={product.image}
									alt={product.name}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant='h5'
										component='div'
									>
										{product.name}
									</Typography>
									<Typography
										variant='body2'
										color='text.primary'
									>
										{product.description}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										color='secondary'
										variant='contained'
										size='small'
										onClick={() => dispatch(addItem(product))}
									>
										Add to Cart
									</Button>
									<Button
										variant='contained'
										size='small'
									>
										View Details
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default Products;
