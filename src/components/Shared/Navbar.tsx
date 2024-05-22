'use client';
import BlackLogo from '@/assets/logo/L&F-B.png';
import navLinks from '@/constants/navLinks';
import { Box, Button, Container, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { RiCloseLargeFill } from 'react-icons/ri';

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	const user = { email: 'hb' };

	return (
		<Container sx={{ overflow: 'hidden' }}>
			<Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} py={2}>
				<Box>
					<Image src={BlackLogo} alt='logo' width={80} height={80} />
				</Box>

				{/* nav links for big screen */}
				<Box
					sx={{
						display: {
							xs: 'none',
							sm: 'flex'
						},
						gap: 4
					}}
				>
					{navLinks.map((link, index) => (
						<Typography
							key={index}
							color='#000'
							component={Link}
							href={link.href}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								'& span': {
									width: '0%',
									height: 2,
									backgroundColor: 'primary.main',
									transition: 'width 0.2s ease'
								},
								'&:hover span': {
									width: '100%'
								}
							}}
						>
							{link.title}
							<span></span>
						</Typography>
					))}
					{user?.email ? (
						<Button variant='contained' color='primary' sx={{ borderRadius: 0 }}>
							Logout
						</Button>
					) : (
						<Button variant='contained' color='primary' sx={{ borderRadius: 0 }}>
							Login
						</Button>
					)}
				</Box>

				<Drawer
					open={open}
					anchor='right'
					sx={{
						'& .MuiDrawer-paper': {
							width: 300
						},
						position: 'relative'
					}}
				>
					{/* logo */}
					<Image src={BlackLogo} alt='logo' width={80} height={80} className='mx-auto py-3 mt-10' />
					{/* close icon */}
					<IconButton
						onClick={() => setOpen(false)}
						aria-label='close navigation'
						sx={{
							borderRadius: 100,
							position: 'absolute',
							top: 10,
							right: 10,
							border: '1px solid #000'
						}}
					>
						<RiCloseLargeFill />
					</IconButton>
					<Divider />

					<Stack spacing={4} p={4}>
						{navLinks.map((link, index) => (
							<Typography
								key={index}
								color='#000'
								component={Link}
								href={link.href}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									'& span': {
										width: '0%',
										height: 2,
										mt: 1,
										backgroundColor: 'primary.main',
										transition: 'width 0.2s ease'
									},
									'&:hover span': {
										width: '50%'
									}
								}}
							>
								{link.title}
								<span></span>
							</Typography>
						))}
						{user?.email ? (
							<Button variant='contained' color='primary' sx={{ borderRadius: 0 }}>
								Logout
							</Button>
						) : (
							<Button variant='contained' color='primary' sx={{ borderRadius: 0 }}>
								Login
							</Button>
						)}
					</Stack>
				</Drawer>
				<IconButton onClick={() => setOpen(true)} aria-label='open navigation'>
					<HiMiniBars3CenterLeft size={25} className='text-gray-900' />
				</IconButton>
			</Stack>
		</Container>
	);
};

export default Navbar;
