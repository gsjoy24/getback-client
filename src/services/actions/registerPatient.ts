'use server';
const registerPatient = async (data: FormData) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/create-patient`, {
		method: 'POST',
		body: data,
		cache: 'no-store'
	});

	const resData = await res.json();

	return resData;
};

export default registerPatient;
