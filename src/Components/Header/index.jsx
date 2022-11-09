import { AppBar, Toolbar, Typography } from '@mui/material';
import Cart from '../Cart';

const Header = () => {
	return (
		<>
			<AppBar>
				<Toolbar>
					<Typography sx={{ flexGrow: 1 }} variant='h3'>OUR STORE</Typography>
					<Cart/>
				</Toolbar>
			</AppBar>
			<Toolbar/>
		</>
	);
};

export default Header;
