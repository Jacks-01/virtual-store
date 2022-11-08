import { AppBar, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography sx={{flexGrow: 1}} variant='h3'>OUR STORE</Typography>
					<ShoppingCartIcon  />
				</Toolbar>
			</AppBar>
			<Toolbar/>
		</>
	);
};

export default Header;
