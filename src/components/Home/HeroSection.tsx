import { Box, Typography } from '@mui/material';
import Navbar from '../Shared/Navbar/Navbar';

const HeroSection = () => {
	return (
		<Box
			sx={{
				height: '200vh'
			}}
		>
			<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
				Welcome to our website
			</Typography>
			<Typography variant='h5' sx={{ fontWeight: 'light' }}>
				We provide the best services
			</Typography>
		</Box>
	);
};

export default HeroSection;
