import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
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
	title: 'GetBack',
	description:
		'Lost something important? GetBack helps you find lost items and connect with those who found them. Free, fast, and easy to use! Recover lost phones, wallets, keys, and more. GetBack Gour Saha Joy.',
	keywords: 'GetBack, Gour Saha Joy, goursahajoy',
	authors: [{ name: 'Gour Saha Joy' }],
	twitter: {
		card: 'summary_large_image',
		site: '@goursahajoy',
		creator: '@goursahajoy',
		images: 'https://res.cloudinary.com/dghszztcc/image/upload/v1719901124/getback_dgg2ja.png'
	},
	openGraph: {
		type: 'website',
		title: 'GetBack',
		description:
			'Lost something important? GetBack helps you find lost items and connect with those who found them. Free, fast, and easy to use! Recover lost phones, wallets, keys, and more. GetBack Gour Saha Joy',
		images: 'https://res.cloudinary.com/dghszztcc/image/upload/v1719901124/getback_dgg2ja.png'
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<Providers>
			<html lang='en'>
				<GoogleAnalytics />
				<body className={roboto.className}>
					<AppRouterCacheProvider>
						<Navbar />
						{children}
						<Footer />
					</AppRouterCacheProvider>
					<Toaster position='top-center' expand={true} closeButton={true} duration={2000} />
				</body>
			</html>
		</Providers>
	);
}
