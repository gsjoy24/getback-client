'use server';
import config from '@/lib/config';
import { FieldValues } from 'react-hook-form';

const signupUser = async (data: FieldValues) => {
	const res = await fetch(`${config.serverURL}/users/register`, {
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

export default signupUser;
