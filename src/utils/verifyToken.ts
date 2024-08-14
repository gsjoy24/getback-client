import { jwtDecode } from 'jwt-decode';
const verifyToken = (token: string) => {
	if (typeof token !== 'string') return null;
	try {
		const decoded = jwtDecode(token);
		return decoded;
	} catch (error: any) {
		return null;
	}
};

export default verifyToken;
