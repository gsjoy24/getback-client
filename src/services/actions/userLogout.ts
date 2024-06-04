'use server';
import config from '@/lib/config';
import { FieldValues } from 'react-hook-form';

const userLogout = async (data: FieldValues) => {
	const res = await fetch(`${config.serverURL}/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const resData = await res.json();
	return resData;
};

export default userLogout;
