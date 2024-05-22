import heroBg from '@/assets/hero-bg.png';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const HeroSection = () => {
	return (
		<Stack sx={{ position: 'relative' }}>
			<Box className='bg-slate-900 mix-blend-overlay h-[90vh] w-full absolute top-0'>
				<div className='bg-gradient-to-t from-[#000000e9] to-[#00000040] h-full w-full absolute'></div>
				<Image src={heroBg} alt='hero' className='h-full object-cover z-[-1]' />
			</Box>
			<Box sx={{ zIndex: 1 }}>
				<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
					Welcome to our website
				</Typography>
				<Typography variant='h5' sx={{ fontWeight: 'light' }}>
					We provide the best services
				</Typography>
			</Box>
		</Stack>
	);
};

export default HeroSection;
