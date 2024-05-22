import Providers from '@/lib/Providers/Providers';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ weight: ['400', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Lost & Found',
	description:
		'Lost & Found is a platform for finding lost items. Post your lost items and find them easily. We help you find your lost items.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<body className={poppins.className}>
					<AppRouterCacheProvider>{children}</AppRouterCacheProvider>
				</body>
			</html>
		</Providers>
	);
}
