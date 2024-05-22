import { authKey } from '@/constants/authKey';
import { TGenericErrorResponse, TResponseSuccess } from '@/types';
import { getFromLocalStorage } from '@/utils/local-storage';
import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		const accessToken = getFromLocalStorage(authKey);
		if (accessToken) {
			config.headers.Authorization = accessToken;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	//@ts-ignore
	function (response) {
		const responseObj: TResponseSuccess = {
			data: response?.data?.data,
			meta: response?.data?.meta
		};

		return responseObj;
	},
	function (error) {
		const responseObj: TGenericErrorResponse = {
			success: error?.response?.data?.success,
			statusCode: error?.response?.status || 500,
			message: error?.response?.data?.message || 'Something went wrong!',
			errorMassages: error?.response?.data?.message || 'Something went wrong!'
		};
		return responseObj;
	}
);

export default instance;
