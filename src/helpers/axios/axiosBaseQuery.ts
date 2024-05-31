import { TMeta } from '@/types';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import instance from './axiosInstance';

const axiosBaseQuery =
	(
		{ baseUrl }: { baseUrl: string } = { baseUrl: '' }
	): BaseQueryFn<
		{
			url: string;
			method?: AxiosRequestConfig['method'];
			data?: AxiosRequestConfig['data'];
			params?: AxiosRequestConfig['params'];
			headers?: AxiosRequestConfig['headers'];
			meta?: TMeta;
			contentType?: string;
		},
		unknown,
		unknown
	> =>
	async ({ url, method, data, params, headers, contentType }) => {
		try {
			const result = await instance({
				url: baseUrl + url,
				method,
				data,
				params,
				headers: {
					...headers,
					'Content-Type': contentType || 'application/json'
				}
			});
			return result;
		} catch (axiosError) {
			const err = axiosError as AxiosError;
			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message
				}
			};
		}
	};

export default axiosBaseQuery;
