'use client';
import LoadingCompo from '@/app/loading';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetClaimsQuery } from '@/redux/api/features/claimApi';
import { TQueryParams } from '@/types';
import { Box, IconButton, Pagination, Stack } from '@mui/material';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const ItemsClaims = () => {
	const { id } = useParams<{ id: string }>();
	const [page, setPage] = useState<number>(1);
	const [searchTerm, setSearchTerm] = useState({} as TQueryParams);
	const { data, isFetching } = useGetClaimsQuery([
		searchTerm,
		{
			name: 'foundItemId',
			value: id
		},
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
			<PageTitle title='Claims for the item' desc='Check the claims to return the item to the real owner!' />

			<Box
				sx={{
					maxWidth: 600,
					margin: 'auto',
					padding: 2
				}}
			>
				<LFForm onSubmit={handleSubmit}>
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
				{/* {isFetching && <LFBackdrop />}
				{data?.data?.length ? (
					data?.data?.map((item: any) => <FoundItemCard key={item.id} item={item} />)
				) : (
					<EmptyCard />
				)} */}
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

export default ItemsClaims;
