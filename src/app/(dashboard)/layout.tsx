import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import DashboardDrawer from './components/DashboardDrawer';

const DashboardLayout = ({ children }: { readonly children: React.ReactNode }) => {
	return (
		<PrivateRoute role='ADMIN'>
			<DashboardDrawer>{children}</DashboardDrawer>
		</PrivateRoute>
	);
};

export default DashboardLayout;
