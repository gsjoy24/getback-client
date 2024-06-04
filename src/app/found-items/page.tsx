'use client';
import LFFilterSelect from '@/components/Form/LFFilterSelect';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import LFBackdrop from '@/components/Shared/Backdrop/Backdrop';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import FoundItemCard from '@/components/Shared/FoundItemCard/FoundItemCard';
import LostItemCard from '@/components/Shared/LostItemCard/LostItemCard';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import { useGetFoundItemsQuery } from '@/redux/api/foundItemApi';
import { TQueryParams } from '@/types';
import { Box, IconButton, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const FoundItems = () => {
	const [filterParam, setFilterParam] = useState({} as TQueryParams);
	const [searchTerm, setSearchTerm] = useState({} as TQueryParams);
	const [page, setPage] = useState<number>(1);
	const { data: categoryData } = useGetCategoriesQuery(null);
	const categoryOptions = categoryData?.data?.map((category: any) => ({
		label: category.name,
		value: category.id
	}));

	const { data, isFetching } = useGetFoundItemsQuery([
		filterParam,
		searchTerm,
		{
			name: 'limit',
			value: 6
		},
		{
			name: 'page',
			value: page
		}
	]);

	const totalPage = data?.meta?.total / data?.meta?.limit;
	const handleSubmit = (data: FieldValues) => {
		setPage(1);
		setSearchTerm({ name: 'searchTerm', value: data.searchTerm });
	};

	return (
		<div>
			<PageTitle
				title='Found Items'
				desc='Dive into a collection of Found items awaiting reconnection with their owners.'
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
							setPage={setPage}
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
				p={{
					xs: 2,
					sm: 5
				}}
				sx={{
					flexDirection: {
						xs: 'column',
						sm: 'row'
					},
					position: 'relative'
				}}
			>
				{isFetching && <LFBackdrop />}
				{data?.data?.length ? (
					data?.data?.map((item: any) => <FoundItemCard key={item.id} item={item} />)
				) : (
					<EmptyCard />
				)}
			</Stack>

			{/* for mobile */}
			{data?.data?.length < data?.meta?.total && (
				<>
					<div className='flex justify-center mb-7 md:hidden'>
						<Pagination
							count={totalPage}
							variant='outlined'
							shape='rounded'
							onChange={(e, value) => setPage(value)}
							sx={{
								margin: 'auto'
							}}
							size='small'
							showFirstButton
							showLastButton
						/>
					</div>

					{/* for pc */}
					<div className='justify-center mb-7 hidden md:flex'>
						<Pagination
							count={totalPage}
							variant='outlined'
							shape='rounded'
							onChange={(e, value) => setPage(value)}
							sx={{
								margin: 'auto'
							}}
							size='large'
							showFirstButton
							showLastButton
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default FoundItems;
