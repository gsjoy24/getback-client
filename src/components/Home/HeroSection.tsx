import heroBg from '@/assets/hero-bg.png';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { BsBoxArrowInDown } from 'react-icons/bs';

const HeroSection = () => {
	return (
		<Stack sx={{ position: 'relative', height: '91vh' }} justifyContent='center' alignItems='center'>
			{/* background image */}
			<Box className='h-full w-full absolute top-0'>
				<div className='bg-gradient-to-t from-[#000000e9] to-[#00000040] h-full w-full absolute'></div>
				<Image src={heroBg} alt='hero' className='h-full object-cover z-[-1]' />
			</Box>
			{/* text content */}
			<Box
				sx={{
					zIndex: 1,
					maxWidth: '700px',
					p: 2,
					textAlign: 'center',
					color: '#fff',
					position: 'relative',
					top: {
						xs: 0,
						sm: '80px'
					}
				}}
			>
				<Typography
					variant='h1'
					sx={{
						fontWeight: '900',
						fontSize: {
							xs: '2rem',
							sm: '3rem'
						},
						lineHeight: '1.4',
						marginBottom: 2
					}}
				>
					Lost Something? Found Something? We&#39;re Here to Help.
				</Typography>
				<Typography sx={{ fontWeight: 'light', color: '#fff' }}>
					Whether you&#39;ve misplaced something or found someone else&#39;s belongings, our platform makes it easy to
					report and reclaim lost items. Connect with others and help bring lost items back to their rightful owners.
				</Typography>

				<Stack mt={2} sx={{ flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }} justifyContent='center'>
					<Button component={Link} href='/report-lost-item' sx={{ px: '40px' }} color='primary' size='large'>
						Report Lost Item
					</Button>
					<Button
						component={Link}
						href='/report-found-item'
						variant='outlined'
						sx={{ px: '40px' }}
						color='primary'
						size='large'
					>
						Claim Found Item
					</Button>
				</Stack>
			</Box>
		</Stack>
	);
};

export default HeroSection;
