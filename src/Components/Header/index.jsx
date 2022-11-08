import { AppBar, Toolbar, Typography } from '@mui/material';



const Header = () => {
	return (
		<AppBar>
			<Toolbar>
                <Typography variant='h3'>OUR STORE</Typography>
                <Typography sx={{marginLeft: '95rem'}}>CART</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
