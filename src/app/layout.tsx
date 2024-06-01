import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import Providers from '@/lib/Providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';

const roboto = Roboto({
	weight: '400',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Lost & Found',
	description:
		'Lost & Found is a platform for finding lost items. Post your lost items and find them easily. We help you find your lost items.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body className={roboto.className}>
					<AppRouterCacheProvider>
						<Navbar />
						{children}
						<Footer />
					</AppRouterCacheProvider>
					<Toaster position='top-center' expand={true} closeButton={true} />
				</body>
			</html>
		</Providers>
	);
}
