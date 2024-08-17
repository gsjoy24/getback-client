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
		}),
		toggleUserStatus: build.mutation({
			query: ({ id }) => ({
				url: `/auth/toggle-user-status/${id}/`,
				method: 'PUT'
			}),
			invalidatesTags: ['users']
		}),
		toggleUserRole: build.mutation({
			query: ({ id }) => ({
				url: `/auth/toggle-user-role/${id}/`,
				method: 'PUT'
			}),
			invalidatesTags: ['users']
		})
	})
});

export const { useGetUsersQuery, useToggleUserStatusMutation, useToggleUserRoleMutation } = usersApi;
