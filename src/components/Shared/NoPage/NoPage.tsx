'use client';
import Loading from '@/components/Loading/Loading';
import PageTitle from '@/components/Shared/PageTitle';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type TProps = {
	url: string;
	pageName: string;
};

const NoPage = ({ url, pageName }: TProps) => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push(url || '/');
		}, 3000);
	}, [router, url]);

	return (
		<div className='min-h-[90vh] h-full w-full flex justify-center items-center flex-col gap-4'>
			<Loading />
			<PageTitle title='Page Not Found' desc={`redirecting to ${pageName || 'an other'} page`} />
		</div>
	);
};

export default NoPage;
