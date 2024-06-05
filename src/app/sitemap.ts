import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://getback.vercel.app/',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1
		},
		{
			url: 'https://getback.vercel.app/lost-items',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/found-items',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/login',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/signup',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/report-lost-item',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/report-found-item',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/about',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/privacy-policy',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		},
		{
			url: 'https://getback.vercel.app/terms-of-use',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8
		}
	];
}
