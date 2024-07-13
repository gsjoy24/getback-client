'use client';
import LFFilterSelect from '@/components/Form/LFFilterSelect';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import LFBackdrop from '@/components/Shared/Backdrop/Backdrop';
import MyClaimCard from '@/components/Shared/ClaimCard/MyClaimCard';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/features/categoryApi';
import { useGetMyClaimsQuery } from '@/redux/api/features/claimApi';
import { TQueryParams } from '@/types';
import { Box, IconButton, Pagination, Stack } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const ClaimedItems = () => {
	const [filterParam, setFilterParam] = useState({} as TQueryParams);
	const [searchTerm, setSearchTerm] = useState({} as TQueryParams);
	const [page, setPage] = useState<number>(1);
	const statusOptions = ['PENDING', 'APPROVED', 'REJECTED'].map((status) => ({ value: status, label: status }));

	const { data, isFetching } = useGetMyClaimsQuery([
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
		<PrivateRoute>
			<PageTitle title='Claimed Items' desc='Your collection of items that you have claimed.' />

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
							label='Filter By Status'
							options={statusOptions}
							name='status'
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
					data?.data?.map((item: any) => <MyClaimCard key={item?.id} item={item} />)
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
		</PrivateRoute>
	);
};

export default ClaimedItems;
