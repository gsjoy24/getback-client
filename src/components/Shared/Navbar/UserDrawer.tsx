'use client';
import BlackLogo from '@/assets/logo/logo-b.png';
import navLinks from '@/constants/navLinks';
import { Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { RiCloseLargeFill } from 'react-icons/ri';

type TUserDrawerProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};
const AuthButton = dynamic(() => import('./AuthButton'), { ssr: false });

const UserDrawer = ({ open, setOpen }: TUserDrawerProps) => {
	return (
		<Drawer
			open={open}
			anchor='right'
			sx={{
				'& .MuiDrawer-paper': {
					width: '80%'
				},
				position: 'relative',
				zIndex: 9999
			}}
		>
			{/* logo */}
			<Image src={BlackLogo} alt='logo' width={140} height={80} className='mx-auto py-3 mt-10' />

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

			<Stack spacing={3} p={4}>
				{navLinks?.map((link) => (
					<Typography
						key={link?.href}
						color='#000'
						component={Link}
						href={link.href}
						onClick={() => setOpen(false)}
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
				<Suspense fallback={<p>Loading</p>}>
					<AuthButton setOpen={setOpen} />
				</Suspense>
			</Stack>
		</Drawer>
	);
};

export default UserDrawer;
