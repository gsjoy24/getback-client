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
		})
	})
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
