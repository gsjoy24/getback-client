'use client';
import { useGetFoundItemQuery } from '@/redux/api/foundItemApi';
import { useParams } from 'next/navigation';

const FoundItemDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data } = useGetFoundItemQuery(id);
	console.log(data);
	return (
		<div>
			<h1>This is FoundItemDetails component</h1>
		</div>
	);
};

export default FoundItemDetails;
