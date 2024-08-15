import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';

const DashboardLayout = ({ children }: { readonly children: React.ReactNode }) => {
	return <PrivateRoute role='ADMIN'>{children}</PrivateRoute>;
};

export default DashboardLayout;
