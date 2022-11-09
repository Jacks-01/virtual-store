import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { List, ListItem, Drawer, Typography, Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import numeral from 'numeral';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	console.log(cart);

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

					<Divider />
					{cart.items.map((item, index) => (
						<>
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
									<Typography>
										{numeral(item.price).format('$0,0.00')}
									</Typography>
									<IconButton sx={{ color: 'black' }}>
										<RemoveCircleIcon />
									</IconButton>
								</Grid>
							</ListItem>
							<Divider />
						</>
					))}
					<Divider />
					<Grid
						container
						justifyContent='flex-end'
						sx={{ pr: '3.5rem', mt: '1rem' }}
					>
						<Typography> Subtotal: {numeral(cart.subtotal).format('$0,0.00')}</Typography>
					</Grid>
				</List>
			</Drawer>
		</>
	);
};

export default Cart;
