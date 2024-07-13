import logo from '@/assets/logo/logo-w.png';
import navLinks from '@/constants/navLinks';
import { Facebook, Instagram, LinkedIn, Twitter, X } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
			<Container maxWidth='lg'>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={4}>
						<Image src={logo} alt='GetBack Logo' width={150} height={100} />
						<Typography variant='body2' sx={{ mt: 2 }}>
							Learn more about our mission to reunite lost items with their owners. Our community is dedicated to
							helping each other find what’s missing.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant='h5' gutterBottom>
							Quick Links
						</Typography>
						<Stack direction='column' gap={1}>
							{navLinks.map((link) => (
								<span key={link?.title}>
									<Link href={link.href} className='hover:underline underline-offset-4'>
										{link.title}
									</Link>
								</span>
							))}
							<span>
								<Link href='/privacy-policy' className='hover:underline underline-offset-4'>
									Privacy Policy
								</Link>
							</span>
							<span>
								<Link href='/terms-of-use' className='hover:underline underline-offset-4'>
									Terms of Use
								</Link>
							</span>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant='h5' gutterBottom>
							Contact Us
						</Typography>
						<Typography variant='body2'>Email: gour.joy24@gmail.com</Typography>
						<Typography variant='body2'>Phone: (123) 456-7890</Typography>
						<Box sx={{ mt: 2 }}>
							<IconButton href='https://www.facebook.com/goursahajoy' color='inherit'>
								<span style={visuallyHidden}>Facebook</span>
								<Facebook />
							</IconButton>
							<IconButton href='https://www.instagram.com/goursahajoy' color='inherit'>
								<span style={visuallyHidden}>Instagram</span>
								<Instagram />
							</IconButton>
							<IconButton href='https://x.com/goursahajoy' color='inherit'>
								<span style={visuallyHidden}>X</span>
								<X />
							</IconButton>
							<IconButton href='https://www.linkedin.com/in/goursahajoy' color='inherit'>
								<span style={visuallyHidden}>LinkedIn</span>
								<LinkedIn />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
				<Box sx={{ mt: 4, textAlign: 'center' }}>
					<Typography variant='body2'>
						&copy; {currentYear} GetBack. All rights reserved. Made with ❤️ by{' '}
						<Link href='https://goursahajoy.me/' target='_blank' className='hover:underline underline-offset-4'>
							Gour Saha Joy
						</Link>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
