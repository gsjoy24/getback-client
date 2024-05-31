import logo from '@/assets/logo/L&F-W.png';
import navLinks from '@/constants/navLinks';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 6 }}>
			<Container maxWidth='lg'>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={4}>
						<Image src={logo} alt='Lost and Found Logo' width={100} height={100} />
						<Typography variant='body2' sx={{ mt: 2 }}>
							Learn more about our mission to reunite lost items with their owners. Our community is dedicated to
							helping each other find what’s missing.
						</Typography>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Typography variant='h6' gutterBottom>
							Quick Links
						</Typography>
						<Stack direction='column' gap={1}>
							{navLinks.map((link) => (
								<span key={link.title}>
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
						<Typography variant='h6' gutterBottom>
							Contact Us
						</Typography>
						<Typography variant='body2'>Email: support@lostandfound.com</Typography>
						<Typography variant='body2'>Phone: (123) 456-7890</Typography>
						<Box sx={{ mt: 2 }}>
							<IconButton href='https://www.facebook.com' color='inherit'>
								<Facebook />
							</IconButton>
							<IconButton href='https://www.twitter.com' color='inherit'>
								<Twitter />
							</IconButton>
							<IconButton href='https://www.instagram.com' color='inherit'>
								<Instagram />
							</IconButton>
							<IconButton href='https://www.linkedin.com' color='inherit'>
								<LinkedIn />
							</IconButton>
						</Box>
					</Grid>
				</Grid>
				<Box sx={{ mt: 4, textAlign: 'center' }}>
					<Typography variant='body2'>
						&copy; {currentYear} Lost and Found. All rights reserved. Made with ❤️ by{' '}
						<Link
							href='https://gour-chandra-saha.web.app/'
							target='_blank'
							className='hover:underline underline-offset-4'
						>
							Gour Saha Joy
						</Link>
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
