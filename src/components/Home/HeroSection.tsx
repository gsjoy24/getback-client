'use client';
import heroAnimation from '@/assets/hero-animation.json';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<Box
			sx={{
				minHeight: '90vh',
				display: 'flex',
				alignItems: 'center',
				backgroundColor: '#f0f4f8',
				padding: { xs: 2, sm: 4 }
			}}
		>
			<Container maxWidth='lg'>
				<Grid container spacing={4} alignItems='center' direction={{ xs: 'column-reverse', sm: 'row' }}>
					<Grid item xs={12} md={6}>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 'bold',
								fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
								color: '#333',
								marginBottom: 2
							}}
						>
							Lost Something? Found Something?
						</Typography>
						<Typography
							variant='body1'
							sx={{
								fontSize: { xs: '1rem', sm: '1.2rem' },
								color: '#555',
								marginBottom: 4,
								lineHeight: 1.6
							}}
						>
							Our platform connects people who have lost their belongings with those who have found them. Report a lost
							item or return a found item easily and quickly.
						</Typography>
						<Box
							sx={{
								display: 'flex',
								gap: 2,
								flexWrap: 'wrap',
								justifyContent: {
									xs: 'center',
									sm: 'flex-start'
								}
							}}
						>
							<Button
								component={Link}
								href='/report-lost-item'
								variant='contained'
								color='primary'
								size='large'
								sx={{ px: 4, py: 1.5 }}
							>
								Report Lost Item
							</Button>
							<Button
								component={Link}
								href='/report-found-item'
								variant='outlined'
								color='primary'
								size='large'
								sx={{ px: 4, py: 1.5 }}
							>
								Report Found Item
							</Button>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							maxHeight: {
								xs: '200px',
								sm: '300px',
								md: '500px'
							}
						}}
					>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '8px',
								padding: 2
							}}
						>
							<Lottie animationData={heroAnimation} loop={true} />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default HeroSection;
