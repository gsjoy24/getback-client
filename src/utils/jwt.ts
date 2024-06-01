import { jwtDecode } from 'jwt-decode';
export const decodeToken = (token: string) => {
	if (typeof token !== 'string') return null;
	return jwtDecode(token);
};
