'use client';
import { useGetFoundItemsQuery } from '@/redux/api/foundItemApi';

const FoundItems = () => {
	const { data } = useGetFoundItemsQuery(null);

	console.log(data);

	return (
		<div>
			<h1>This is FoundItems component</h1>
		</div>
	);
};

export default FoundItems;
