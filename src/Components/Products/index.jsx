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
import { useSelector } from 'react-redux';
import React from 'react';

const Products = () => {
	const { products } = useSelector((state) => state.products);
	const categories = useSelector((state) => state.categories);
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
									<Button size='small'>Add to Cart</Button>
									<Button size='small'>View Details</Button>
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
