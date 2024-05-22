import BlackLogo from '@/assets/logo/L&F-B.png';
import navLinks from '@/constants/navLinks';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: 2,
				backgroundColor: '#fff'
			}}
		>
			<Box>
				<Image src={BlackLogo} alt='logo' width={80} height={80} />
			</Box>

			{/* nav links */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: 2
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
			</Box>

			<Box>
				<Button variant='contained' color='primary'>
					Login
				</Button>
			</Box>
		</Box>
	);
};

export default Navbar;
