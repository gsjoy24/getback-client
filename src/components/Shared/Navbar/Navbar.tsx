'use client';
import BlackLogo from '@/assets/logo/logo-b.png';
import navLinks from '@/constants/navLinks';
import { Box, Container, IconButton, Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useState } from 'react';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import NavItem from './NavItem';
import UserDrawer from './UserDrawer';
const NavMenu = dynamic(() => import('./NavMenu'), { ssr: false });

const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Box
			sx={{
				backgroundColor: '#ffffffd8',
				backdropFilter: 'blur(5px)',
				position: 'sticky',
				top: 0,
				zIndex: 1000,
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
				transition: '0.3s all ease-in-out'
			}}
		>
			<Container>
				<Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} py={1}>
					<Box component={Link} href='/'>
						<Image src={BlackLogo} alt='logo' width={140} height={80} />
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
						{navLinks?.map((link) => (
							<NavItem key={link?.href} link={link} setOpen={setOpen} />
						))}

						<Suspense fallback={<div>Loading...</div>}>
							<NavMenu />
						</Suspense>
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
