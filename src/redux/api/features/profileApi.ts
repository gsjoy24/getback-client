import { baseApi } from '../baseApi';

const profileApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query({
			query: () => ({
				url: '/users/me',
				method: 'GET'
			})
		}),

		updateProfile: build.mutation({
			query: (data) => ({
				url: '/users/me',
				method: 'PUT',
				data
			})
		}),

		deleteAccount: build.mutation({
			query: (data) => ({
				url: '/auth/delete-account',
				method: 'DELETE',
				data
			})
		})
	})
});

export const { useGetProfileQuery, useUpdateProfileMutation, useDeleteAccountMutation } = profileApi;
