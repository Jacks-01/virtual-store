import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';

const Products = () => {
	return (
		<Card sx={{ maxWidth: 345, mt: '100px' }}>
			<CardMedia
				component='img'
				height='140'
				image='/static/images/cards/contemplative-reptile.jpg'
				alt='MacBook'
			/>
			<CardContent>
				<Typography
					gutterBottom
					variant='h5'
					component='div'
				>
					MacBook
				</Typography>
				<Typography
					variant='body2'
					color='text.secondary'
                >
                    MacBooks are made by Apple.
				</Typography>
			</CardContent>
			<CardActions>
				<Button size='small'>Add to Cart</Button>
				<Button size='small'>View Details</Button>
			</CardActions>
		</Card>
	);
};

export default Products;
