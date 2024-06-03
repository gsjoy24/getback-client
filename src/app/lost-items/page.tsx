'use client';
import LostItemCard from '@/components/Shared/LostItemCard/LostItemCard';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetLostItemsQuery } from '@/redux/api/lostItemApi';
import { TQueryParams } from '@/types';
import { Stack } from '@mui/material';
import { useState } from 'react';
import LoadingCompo from '../loading';

const LostItems = () => {
	const [params, setParams] = useState([] as TQueryParams[]);
	const { data: items, isFetching } = useGetLostItemsQuery(params);

	return isFetching ? (
		<LoadingCompo />
	) : (
		<div>
			<PageTitle
				title='Lost Items'
				desc='Dive into a collection of lost items awaiting reconnection with their owners.'
			/>
			<Stack
				justifyContent='center'
				alignItems='center'
				gap={5}
				flexWrap='wrap'
				pb={5}
				sx={{
					flexDirection: {
						xs: 'column',
						sm: 'row'
					}
				}}
			>
				{items?.data?.map((item: any) => (
					<LostItemCard key={item.id} item={item} />
				))}
			</Stack>
		</div>
	);
};

export default LostItems;
