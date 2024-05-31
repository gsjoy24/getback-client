'use server';
import config from '@/lib/config';

const registerPatient = async (data: FormData) => {
	const res = await fetch(`${config.serverURL}/register`, {
		method: 'POST',
		body: data,
		cache: 'no-store'
	});

	const resData = await res.json();

	return resData;
};

export default registerPatient;
