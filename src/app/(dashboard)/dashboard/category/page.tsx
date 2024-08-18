'use client';
import LoadingCompo from '@/app/loading';
import { useGetCategoriesQuery } from '@/redux/api/features/categoryApi';
import { TCategory } from '@/types/category';
import DateToString from '@/utils/DateToString';
import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { GoPencil } from 'react-icons/go';
import AddCategoryModal from './components/AddCategoryModal';
import DeleteCategoryButton from './components/DeleteCategoryButton';
import UpdateCategory from './components/UpdateCategory';

const CategoryPage = () => {
	const { data, isLoading } = useGetCategoriesQuery({});

	const rows =
		data?.data.map((user: TCategory) => ({
			id: user.id,
			name: user.name,
			createdAt: user.createdAt
		})) ?? [];

	const tableRowsNames = ['#', 'Name', 'Created At', 'Actions'];

	return isLoading ? (
		<LoadingCompo />
	) : (
		<div className='w-[100vw] md:w-[100%]'>
			<Stack direction='row' justifyContent='space-between' alignItems='center' className='mb-4'>
				<h1 className='text-2xl font-bold mb-2'>All Categories</h1>
				<AddCategoryModal />
			</Stack>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: '100%' }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							{tableRowsNames.map((name) => (
								<TableCell
									sx={{
										position: name === '#' ? 'sticky' : 'static',
										left: 0,
										backgroundColor: '#f5f5f5'
									}}
									key={name}
								>
									{name}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows?.map((row: TCategory, i: number) => (
							<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
								<TableCell
									scope='row'
									sx={{
										position: 'sticky',
										left: 0,
										backgroundColor: '#f5f5f5'
									}}
								>
									{i + 1}
								</TableCell>
								<TableCell component='th' scope='row' className='min-w-[8rem]'>
									{row.name}
								</TableCell>
								<TableCell className='min-w-[9rem]'>{DateToString(row.createdAt)}</TableCell>
								<TableCell
									sx={{
										display: 'flex'
									}}
								>
									<DeleteCategoryButton id={row.id} />
									<UpdateCategory id={row.id} name={row.name} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default CategoryPage;
