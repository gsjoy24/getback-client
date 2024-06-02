'use client';
import { store } from '@/redux/store';
import { ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Provider } from 'react-redux';
import theme from '../theme/theme';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</LocalizationProvider>
		</Provider>
	);
};

export default Providers;
