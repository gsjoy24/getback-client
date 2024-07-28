import BlackLogo from '@/assets/logo/logo-b.png';
import navLinks from '@/constants/navLinks';
import { Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { RiCloseLargeFill } from 'react-icons/ri';

type TUserDrawerProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const UserDrawer = ({ open, setOpen }: TUserDrawerProps) => {
	const AuthButton = dynamic(() => import('./AuthButton'), { ssr: false });
	return (
		<Drawer
			open={open}
			anchor='right'
			sx={{
				'& .MuiDrawer-paper': {
					width: '80%'
				},
				position: 'relative'
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
				<AuthButton setOpen={setOpen} />
			</Stack>
		</Drawer>
	);
};

export default UserDrawer;
