import axiosBaseQuery from '@/helpers/axios/axiosBaseQuery';
import config from '@/lib/config';
import { createApi } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: axiosBaseQuery({ baseUrl: config.serverURL }),
	endpoints: () => ({}),
	tagTypes: [
		'Categories',
		'LostItems',
		'FoundItems',
		'Claims',
		'Users',
		'My-profile',
		'My-lost-items',
		'My-found-items',
		'My-claims'
	]
});
