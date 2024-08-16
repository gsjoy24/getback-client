import { TQueryParams } from '@/types';
import { baseApi } from '../baseApi';

const usersApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				params.append('limit', '10');
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});
				return {
					url: '/users',
					method: 'GET',
					params
				};
			},
			providesTags: ['users']
		})
	})
});

export const { useGetUsersQuery } = usersApi;
