import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
	List,
	ListItem,
	Stack,
	Box,
	Drawer,
	Typography,
	Divider,
	Paper,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	console.log(cart);
	const dispatch = useDispatch();

	const [drawer, setDrawer] = useState(false);

	return (
		<>
			<IconButton onClick={() => setDrawer(true)}>
				<ShoppingCartIcon sx={{color:'#ffffff'}} /> <Typography color='#ffffff'>{`(${cart.totalQuantity})`}</Typography>
			</IconButton>
			<Drawer
				anchor='right'
				open={drawer}
				onClose={() => setDrawer(false)}
			>
				<List sx={{ padding: '2rem', width: '30vw' }}>
					<Typography variant='body1'>Cart</Typography>
					<Typography>Subtotal: {}</Typography>
					<Divider />
					{cart.items.map((item, index) => (
						<ListItem key={`cart-item-${index}`}>
							<Box sx={{ flexGrow: 1, height: 'auto', m: '.5rem' }}>
								<Paper elevation='6' >
                                    <Typography sx={{pb: '.5rem'}}>{item.name}</Typography>
                                    <Typography>{item.price}</Typography>
                                    {/* <RemoveIcon/> */}
								</Paper>
							</Box>
						</ListItem>
					))}
				</List>
			</Drawer>
		</>
	);
};

export default Cart;
