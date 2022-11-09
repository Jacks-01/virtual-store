import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	List,
	ListItem,
	Box,
	Drawer,
	Typography,
	Divider,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	console.log(cart);
	const dispatch = useDispatch();

	const [drawer, setDrawer] = useState(false);

	return (
		<>
			<IconButton onClick={() => setDrawer(true)}>
				<ShoppingCartIcon sx={{ color: '#ffffff' }} />{' '}
				<Typography color='#ffffff'>{`(${cart.totalQuantity})`}</Typography>
			</IconButton>
			<Drawer
				anchor='right'
				open={drawer}
				onClose={() => setDrawer(false)}
			>
				<List sx={{ padding: '2rem', width: '30vw' }}>
					<Typography variant='body1'>Cart</Typography>
					<Grid
						container
						justifyContent='flex-start'
					>
						<Typography> Subtotal: $5000</Typography>
					</Grid>
					<Divider />
					{cart.items.map((item, index) => (
						<ListItem key={`cart-item-${index}`}>
							<Grid
								xs
								alignItems='center'
							>
								<Typography>{item.name}</Typography>
							</Grid>
							<Grid
								xs
								container
								justifyContent='flex-end'
								alignItems='center'
							>
								<Typography>{item.price}</Typography>
								<IconButton sx={{ color: 'black' }}>
									<RemoveCircleIcon />
								</IconButton>
							</Grid>
						</ListItem>
					))}
					<Divider />
					
				</List>
			</Drawer>
		</>
	);
};

export default Cart;
