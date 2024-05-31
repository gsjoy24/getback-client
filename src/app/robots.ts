import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/dashboard/'
		},
		sitemap: 'https://lost-and-found1.vercel.app/sitemap.xml'
	};
}
