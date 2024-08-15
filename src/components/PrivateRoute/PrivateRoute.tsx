'use client';
import LoadingCompo from '@/app/loading';
import { useAppSelector } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type PrivateRouteProps = {
	children: React.ReactNode;
	role?: string;
};

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const pathname = usePathname();
	const user = useAppSelector((state) => state.auth.user);

	useEffect(() => {
		if (!user) {
			router.push('/login');
		} else if (role && user.role !== role) {
			router.push('/');
		} else {
			setLoading(false);
		}
	}, [pathname, user, router, role]);

	if (loading) return <LoadingCompo />;

	return <>{children}</>;
};

export default PrivateRoute;
