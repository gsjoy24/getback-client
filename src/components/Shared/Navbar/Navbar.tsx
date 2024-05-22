'use client';
import BlackLogo from '@/assets/logo/L&F-B.png';
import navLinks from '@/constants/navLinks';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import UserDrawer from './UserDrawer';

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const user = { email: 'hb' };

	return (
		<Box
			sx={{
				backgroundColor: '#fff',
				position: 'sticky',
				top: 0,
				zIndex: 1000,
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
				transition: '0.3s all ease-in-out'
			}}
		>
			<Container>
				<Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} py={1}>
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

					{/* nav links for small screen */}
					<UserDrawer open={open} setOpen={setOpen} user={user} />

					<IconButton
						onClick={() => setOpen(true)}
						aria-label='open navigation'
						sx={{
							display: {
								xs: 'block',
								sm: 'none'
							}
						}}
					>
						<HiMiniBars3CenterLeft size={25} className='text-gray-900' />
					</IconButton>
				</Stack>
			</Container>
		</Box>
	);
};

export default Navbar;
