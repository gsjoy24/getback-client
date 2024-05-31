'use client';
import BlackLogo from '@/assets/logo/L&F-B.png';
import navLinks from '@/constants/navLinks';
import { getUserInfo, logout } from '@/services/auth.services';
import { TUser } from '@/types/user';
import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import NavItem from './NavItem';
import UserDrawer from './UserDrawer';

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const AuthButton = dynamic(() => import('./AuthButton'), { ssr: false });

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
								md: 'flex'
							},
							gap: 4
						}}
					>
						{navLinks && navLinks?.map((link, index) => <NavItem key={index} link={link} setOpen={setOpen} />)}
						<AuthButton />
					</Box>

					{/* nav links for small screen */}
					<UserDrawer open={open} setOpen={setOpen} />

					<IconButton
						onClick={() => setOpen(true)}
						aria-label='open navigation'
						sx={{
							display: {
								xs: 'block',
								md: 'none'
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
