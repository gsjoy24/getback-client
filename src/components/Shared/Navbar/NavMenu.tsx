import { getUserInfo, logout } from '@/services/auth.services';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as React from 'react';

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const userData = getUserInfo();
	const router = useRouter();

	const handleLogout = () => {
		logout();
		router.refresh();
	};

	return userData && userData?.email ? (
		<div>
			<IconButton
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				sx={{ padding: '3px' }}
			>
				<AccountCircleIcon fontSize='large' />
			</IconButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				{userData?.role === 'admin' && (
					<MenuItem onClick={handleClose}>
						<Link href='/dashboard'>Dashboard</Link>
					</MenuItem>
				)}
				<MenuItem onClick={handleClose}>
					<Link href='/my-profile'>My Profile</Link>
				</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</div>
	) : (
		<Button component={Link} href='/login'>
			Login
		</Button>
	);
}
