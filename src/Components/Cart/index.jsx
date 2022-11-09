import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { List, ListItem, Stack, Box, Drawer, Typography, Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
	const cart  = useSelector((state) => state.cart);
	console.log(cart);
	const dispatch = useDispatch();

	const [drawer, setDrawer] = useState(false);

	return (
		<>
			<IconButton onClick={() => setDrawer(true)}>
				<ShoppingCartIcon /> {`(${cart.totalQuantity})`}
			</IconButton>
			<Drawer
				anchor='right'
				open={drawer}
				onClose={() => setDrawer(false)}
			>
				<List sx={{padding: '2rem', width: '30vw'}}>
                    <Typography variant='body1'>Cart</Typography>
                    <Divider/>
					{cart.items.map((item, index) => (
                        <ListItem key={`cart-item-${index}`}>
							<Typography>{item.name}</Typography>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

export default Cart;
