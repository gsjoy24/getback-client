'use client';
import { setUser } from '@/redux/api/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout } from '@/services/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import NavItem from './NavItem';

type TAuthButtonProps = {
	setOpen: (open: boolean) => void;
};

const AuthButton = ({ setOpen }: TAuthButtonProps) => {
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.auth.user);

	const handleLogout = async () => {
		logout();
		dispatch(setUser({ user: null, token: null }));
	};

	return (
		<>
			{user ? (
				<>
					<NavItem link={{ title: 'My Profile', href: '/my-profile' }} setOpen={setOpen} />
					<NavItem link={{ title: 'Dashboard', href: '/dashboard' }} setOpen={setOpen} />
					<Button onClick={handleLogout} sx={{ borderRadius: 0 }}>
						Logout
					</Button>
				</>
			) : (
				<Button onClick={() => setOpen(false)} component={Link} href='/login'>
					Login
				</Button>
			)}
		</>
	);
};

export default AuthButton;
