'use client';
import { useGetUsersQuery } from '@/redux/api/features/usersApi';
import { useState } from 'react';

const Users = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [page, setPage] = useState<number>(1);
	const { data, isLoading } = useGetUsersQuery([
		{ name: 'page', value: page },
		{ name: 'searchTerm', value: searchTerm }
	]);

	return (
		<div>
			<h1>This is Users component</h1>
		</div>
	);
};

export default Users;
