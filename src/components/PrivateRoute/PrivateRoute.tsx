'use client';
import LoadingCompo from '@/app/loading';
import { isLoggedIn } from '@/services/auth.services';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

type PrivateRouteProps = {
	children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const router = useRouter();
	const currentPath = usePathname();
	const isLogin = isLoggedIn();

	useEffect(() => {
		if (!isLogin) {
			router.push(`/login?redirect=${currentPath}`);
		}
	}, [isLogin, currentPath, router]);

	if (!isLogin) {
		return <LoadingCompo />;
	}

	return <>{children}</>;
};

export default PrivateRoute;
