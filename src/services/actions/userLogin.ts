'use server';
import config from '@/lib/config';
import { FieldValues } from 'react-hook-form';

const userLogin = async (data: FieldValues) => {
	const res = await fetch(`${config.serverURL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
		cache: 'no-store'
	});

	const resData = await res.json();

	return resData;
};

export default userLogin;
