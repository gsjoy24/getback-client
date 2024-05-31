import loginImage from '@/assets/login.jpg';
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

const LoginPage = () => {
	return (
		<Grid container sx={{ minHeight: '97vh' }}>
			<Grid
				item
				md={4}
				sx={{
					display: {
						xs: 'none',
						md: 'block'
					}
				}}
			>
				<Image src={loginImage} width={300} height={700} alt='Login' className='h-full w-auto' />
			</Grid>
			<Grid item xs={12} md={6}>
        <Box>
          <Typo
        </Box>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
