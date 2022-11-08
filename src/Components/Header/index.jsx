import { AppBar, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
	return (
		<AppBar>
			<Toolbar>
				<Typography variant='h3'>OUR STORE</Typography>
				<ShoppingCartIcon sx={{ marginLeft: '95rem' }} />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
