'use client';
import { getUserInfo, logout } from '@/services/auth.services';
import { TUser } from '@/types/user';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';

type TAuthButtonProps = {
	setOpen?: (open: boolean) => void;
};

const AuthButton = ({ setOpen }: TAuthButtonProps) => {
	const router = useRouter();
	const [userData, setUserData] = useState<TUser | null>(null);

	useEffect(() => {
		setUserData(getUserInfo());
	}, []);

	const handleLogout = async () => {
		logout();

		router.refresh();
	};

	return (
		<>
			{userData && userData?.email ? (
				<>
					<NavItem link={{ title: 'My Profile', href: '/my-profile' }} setOpen={setOpen} />
					<NavItem link={{ title: 'Dashboard', href: '/dashboard' }} setOpen={setOpen} />
					<Button onClick={handleLogout} sx={{ borderRadius: 0 }}>
						Logout
					</Button>
				</>
			) : (
				<Button onClick={() => setOpen && setOpen(false)} component={Link} href='/login'>
					Login
				</Button>
			)}
		</>
	);
};

export default AuthButton;
