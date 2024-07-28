'use client';
import { getUserInfo, logout } from '@/services/auth.services';
import { TUser } from '@/types/user';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BasicMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [userData, setUserData] = useState<TUser | null>(null);

	useEffect(() => {
		setUserData(getUserInfo());
	}, []);

	const handleLogout = () => {
		logout();
		window.location.reload();
	};

	return userData?.email ? (
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
					<Link href='/dashboard'>
						<MenuItem onClick={handleClose}>Dashboard</MenuItem>
					</Link>
				)}
				<Link href='/my-profile'>
					<MenuItem onClick={handleClose}>My Profile</MenuItem>
				</Link>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			</Menu>
		</div>
	) : (
		<Button component={Link} href='/login'>
			Login
		</Button>
	);
}
