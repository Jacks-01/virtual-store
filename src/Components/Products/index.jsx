import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import React from 'react';

const Products = () => {
	const { products } = useSelector((state) => state.products);
	console.log(products);

	return (
		<>
			{products.map((product, index) => (
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
							color='text.secondary'
						>
							{product.description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Add to Cart</Button>
						<Button size='small'>View Details</Button>
					</CardActions>
				</Card>
			))}
		</>
	);
};

export default Products;
