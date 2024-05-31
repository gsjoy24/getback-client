import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://lost-and-found1.vercel.app/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1
		},
		{
			url: 'https://lost-and-found1.vercel.app/about',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://lost-and-found1.vercel.app/lost-items',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: 'https://lost-and-found1.vercel.app/found-items',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: 'https://lost-and-found1.vercel.app/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://lost-and-found1.vercel.app/login',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://lost-and-found1.vercel.app/signup',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://lost-and-found1.vercel.app/report-lost-item',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://lost-and-found1.vercel.app/report-found-item',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		}
	];
}
