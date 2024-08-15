import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';

const DashboardLayout = ({ children }: { readonly children: React.ReactNode }) => {
	// return <PrivateRoute role='admin'>{children}</PrivateRoute>;
	return <>{children}</>;
};

export default DashboardLayout;
