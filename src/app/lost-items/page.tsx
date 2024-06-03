'use client';
import LFFilterSelect from '@/components/Form/LFFilterSelect';
import LFForm from '@/components/Form/LFForm';
import LFSelect from '@/components/Form/LFSelect';
import LFInput from '@/components/Form/lFInput';
import LFBackdrop from '@/components/Shared/Backdrop/Backdrop';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import LostItemCard from '@/components/Shared/LostItemCard/LostItemCard';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import { useGetLostItemsQuery } from '@/redux/api/lostItemApi';
import { TQueryParams } from '@/types';
import { Box, IconButton, Stack } from '@mui/material';
import { useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const LostItems = () => {
	const [filterParam, setFilterParam] = useState({} as TQueryParams);
	const [searchTerm, setSearchTerm] = useState({} as TQueryParams);
	const { data: categoryData } = useGetCategoriesQuery(null);
	const categoryOptions = categoryData?.data?.map((category: any) => ({
		label: category.name,
		value: category.id
	}));

	const { data: items, isFetching } = useGetLostItemsQuery([filterParam, searchTerm]);

	const handleSubmit = (data: any) => {
		setSearchTerm({ name: 'searchTerm', value: data.searchTerm });
	};

	return (
		<div>
			<PageTitle
				title='Lost Items'
				desc='Dive into a collection of lost items awaiting reconnection with their owners.'
			/>

			<Box
				sx={{
					maxWidth: 600,
					margin: 'auto',
					padding: 2
				}}
			>
				<LFForm onSubmit={handleSubmit}>
					<Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
						<div className='relative w-full'>
							<LFInput name='searchTerm' label='Search' />
							<IconButton
								type='submit'
								sx={{
									position: 'absolute',
									right: 0,
									top: 0
								}}
							>
								<HiMagnifyingGlass />
							</IconButton>
						</div>

						<LFFilterSelect
							label='Filter By Category'
							options={categoryOptions}
							name='categoryId'
							setFilterParam={setFilterParam}
						/>
					</Stack>
				</LFForm>
			</Box>

			{/* data section */}
			<Stack
				justifyContent='center'
				alignItems='center'
				gap={5}
				flexWrap='wrap'
				p={5}
				sx={{
					flexDirection: {
						xs: 'column',
						sm: 'row'
					},
					position: 'relative'
				}}
			>
				{isFetching && <LFBackdrop />}
				{items?.data?.length ? (
					items?.data?.map((item: any) => <LostItemCard key={item.id} item={item} />)
				) : (
					<EmptyCard />
				)}
			</Stack>
		</div>
	);
};

export default LostItems;
