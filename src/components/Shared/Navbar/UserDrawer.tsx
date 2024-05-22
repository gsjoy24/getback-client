import BlackLogo from '@/assets/logo/L&F-B.png';
import navLinks from '@/constants/navLinks';
import { Button, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { RiCloseLargeFill } from 'react-icons/ri';

type TUserDrawerProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	user: any;
};

const UserDrawer = ({ open, setOpen, user }: TUserDrawerProps) => {
	return (
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
	);
};

export default UserDrawer;
