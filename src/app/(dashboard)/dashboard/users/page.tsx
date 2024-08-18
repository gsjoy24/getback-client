'use client';
import LoadingCompo from '@/app/loading';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import { UserStatus } from '@/constants';
import {
	useGetUsersQuery,
	useToggleUserRoleMutation,
	useToggleUserStatusMutation
} from '@/redux/api/features/usersApi';
import { TUser } from '@/types/user';
import DateToString from '@/utils/DateToString';
import {
	Box,
	Button,
	IconButton,
	Paper,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { toast } from 'sonner';

const Users = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [page, setPage] = useState<number>(1);
	const { data, isLoading } = useGetUsersQuery([
		{ name: 'page', value: page },
		{ name: 'searchTerm', value: searchTerm }
	]);

	const rows =
		data?.data.map((user: TUser) => ({
			id: user.id,
			name: user.name,
			username: user.username,
			email: user.email,
			phone: user.phone,
			status: user.status,
			role: user.role,
			createdAt: user.createdAt
		})) ?? [];

	const tableRowsNames = ['#', 'Name', 'User Name', 'Email', 'Phone', 'Created At', 'Status', 'Actions'];

	const [toggleUserStatus, { isLoading: isChangingStatus }] = useToggleUserStatusMutation();
	const [toggleUserRole, { isLoading: isChangingRole }] = useToggleUserRoleMutation();

	const handleChangeUserRole = async (id: string) => {
		try {
			const res = await toggleUserRole({ id }).unwrap();
			console.log(res);
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleChangeUserStatus = async (id: string) => {
		try {
			const res = await toggleUserStatus({ id }).unwrap();
			console.log(res);
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleSubmit = (data: FieldValues) => {
		setPage(1);
		setSearchTerm(data.searchTerm);
	};

	return isLoading ? (
		<LoadingCompo />
	) : (
		<div className='w-[100vw] md:w-[100%]'>
			<h1 className='text-2xl font-bold mb-2'>All Users</h1>
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
					</Stack>
				</LFForm>
			</Box>
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
						{rows?.map((row: TUser, i: number) => (
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
								<TableCell>@{row.username}</TableCell>
								<TableCell className='min-w-[6rem]'>{row.email}</TableCell>
								<TableCell className='min-w-[6rem]'>{row.phone}</TableCell>
								<TableCell className='min-w-[9rem]'>{DateToString(row.createdAt)}</TableCell>
								<TableCell>{row.status}</TableCell>
								<TableCell
									sx={{
										display: 'flex'
									}}
								>
									<Button
										disabled={isChangingStatus}
										onClick={() => handleChangeUserStatus(row.id)}
										variant='text'
										sx={{
											color: row.status === UserStatus.ACTIVE ? 'red' : 'green'
										}}
									>
										{row.status === UserStatus.ACTIVE ? 'Block' : 'Activate'}
									</Button>
									<Button
										disabled={isChangingRole}
										onClick={() => handleChangeUserRole(row.id)}
										variant='text'
										sx={{
											whiteSpace: 'nowrap'
										}}
									>
										{row.role === 'ADMIN' ? 'Make User' : 'Make Admin'}
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Users;
