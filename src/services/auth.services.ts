import { authKey } from '@/constants/authKey';
import { decodeToken } from '@/utils/jwt';
import { getFromLocalStorage, setTOLocalStorage } from '@/utils/local-storage';

export const storeUserInfo = (token: string) => {
	return setTOLocalStorage(authKey, token);
};

export const getUserInfo = () => {
	const authToken = getFromLocalStorage(authKey);
	if (!authToken) return null;
	const userData: any = decodeToken(authToken);
	return {
		...userData,
		role: userData?.role?.toLowerCase()
	};
};

export const isLoggedIn = () => {
	const authToken = getFromLocalStorage(authKey);
	return authToken ? true : false;
};

export const logout = () => {
	return localStorage.removeItem(authKey);
};
