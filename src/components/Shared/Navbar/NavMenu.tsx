'use client';
import { setUser } from '@/redux/api/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/services/auth.services';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';

const NavMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.auth.user);

	const handleLogout = () => {
		logout();
		dispatch(setUser({ user: null, token: null }));
	};

	return user ? (
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
				{user?.role === 'ADMIN' && (
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
};

export default NavMenu;
