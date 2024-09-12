import droppedWallet from '@/assets/dropped-wallet.png';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const AboutSection = () => {
	return (
		<Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
			<Container maxWidth='lg'>
				<Grid container spacing={4} alignItems='center'>
					{/* Left Column: Text Content */}

					<Grid item xs={12} md={6}>
						<Card sx={{ borderRadius: '12px', boxShadow: 3 }}>
							<CardMedia
								component='img'
								alt='Dropped Wallet'
								height='300'
								image={droppedWallet.src} // Using .src because of Next.js Image optimization
								sx={{ borderRadius: '12px' }}
							/>
						</Card>
					</Grid>
					<Grid item xs={12} md={6}>
						<Card elevation={0} sx={{ backgroundColor: 'transparent' }}>
							<CardContent sx={{ p: 0 }}>
								<Typography
									variant='h4'
									sx={{
										fontWeight: 'bold',
										mb: 3,
										fontSize: { xs: '1.75rem', sm: '2.25rem' },
										color: '#333'
									}}
								>
									About GetBack
								</Typography>
								<Typography
									variant='body1'
									sx={{
										fontSize: '1rem',
										color: '#555',
										lineHeight: 1.7,
										mb: 3
									}}
								>
									GetBack is a community-driven platform designed to help people report and reclaim lost items. Our
									mission is to connect finders with owners, making it easier for lost belongings to be reunited with
									their rightful owners. Join us today and be part of a community dedicated to bringing lost items back
									home.
								</Typography>
								<Button component={Link} href='/about' variant='contained' color='primary' sx={{ px: 4, py: 1 }}>
									Our Journey
								</Button>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default AboutSection;
