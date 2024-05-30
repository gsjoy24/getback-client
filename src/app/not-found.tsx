import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const NotFound = () => {
	return (
		<Box
			px={2}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				gap: 2,
				textAlign: 'center'
			}}
		>
			<Typography variant='h2'>404</Typography>
			<Typography variant='h5'>Page not found</Typography>
			<Typography variant='body1'>The page you are looking for does not exist or has been moved.</Typography>
			<Button component={Link} href='/'>
				Go back to Home
			</Button>
		</Box>
	);
};

export default NotFound;
