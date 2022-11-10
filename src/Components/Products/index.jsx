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
import React, { useEffect } from 'react';
import { useGetProductByNameQuery } from '../../store/services/categories';
import { getProductsFromApi } from '../../store/products';
const Products = () => {
	const { products } = useSelector((state) => state.products);
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const { data, error, isLoading } = useGetProductByNameQuery('');
	console.log(data, isLoading, error);
	console.log(products);
	// console.log(categories);
	// const [productData, setProductData] = useState(null);

	useEffect(() => {
		if (data) dispatch(getProductsFromApi([...data.results]));
		else if (isLoading) console.log('LOADING......');
		else if (error) console.log('ERROR IN API CALL:', error);
	}, [data, error, isLoading, dispatch]);

	const getData = () => {
		
	}

	return (
		<>
			<Container maxWidth='md'>
				<Grid
					container
					spacing={4}
				>
					{error ? (
						<>Oh no, there was an error</>
					) : isLoading ? (
						<>Loading...</>
					) : data ? (
						products.map((product, index) => (
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
						))
					) : null}
				</Grid>
			</Container>
		</>
	);
};

export default Products;
