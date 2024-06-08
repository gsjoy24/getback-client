'use client';
import LoadingCompo from '@/app/loading';
import { isLoggedIn } from '@/services/auth.services';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type PrivateRouteProps = {
	children: React.ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (!isLoggedIn()) {
			router.push(`/login?redirect=${pathname}`);
		} else {
			setLoading(false);
		}
	}, [pathname, router]);

	if (loading) return <LoadingCompo />;

	return <>{children}</>;
};

export default PrivateRoute;
