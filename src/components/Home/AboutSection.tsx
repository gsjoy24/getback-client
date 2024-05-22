import droppedWallet from '@/assets/dropped-wallet.png';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
	return (
		<Container>
			<Stack
				sx={{
					py: 10,
					flexDirection: { xs: 'column-reverse', md: 'row' },
					gap: 4
				}}
				justifyContent='center'
				alignItems='center'
			>
				{/* text */}
				<Box sx={{ maxWidth: '550px', p: 2 }}>
					<Typography
						variant='h4'
						sx={{
							fontWeight: '700',
							mb: 2,
							fontSize: {
								xs: '1.75rem',
								sm: '2.25rem'
							}
						}}
					>
						About Lost & Found
					</Typography>
					<Typography>
						Lost & Found is a community-driven platform designed to help people report and reclaim lost items. Our
						mission is to connect finders with owners, making it easier for lost belongings to be reunited with their
						rightful owners. Join us today and be part of a community dedicated to bringing lost items back home.
					</Typography>
					<Button component={Link} href='/about-us' color='primary' sx={{ mt: 2 }}>
						Learn More
					</Button>
				</Box>

				{/* image */}
				<Box>
					<Image
						src={droppedWallet}
						alt='dropped wallet'
						className='rounded-lg shadow-md border-4'
						width={500}
						height={250}
					/>
				</Box>
			</Stack>
		</Container>
	);
};

export default AboutSection;
