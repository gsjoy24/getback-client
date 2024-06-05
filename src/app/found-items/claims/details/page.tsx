'use client';
import Loading from '@/components/Loading/Loading';
import PageTitle from '@/components/Shared/PageTitle';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NoPageHere = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/found-items');
		}, 3000);
	}, [router]);

	return (
		<div className='h-full w-full flex justify-center items-center'>
			<div>
				<PageTitle title='Page Not Found' desc='redirecting to found items page' />
				<br />
				<Loading />
			</div>
		</div>
	);
};

export default NoPageHere;
