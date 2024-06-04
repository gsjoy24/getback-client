import { baseApi } from '../baseApi';

const profileApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query({
			query: () => ({
				url: '/my-profile',
				method: 'GET'
			})
		}),
		updateProfile: build.mutation({
			query: (data) => ({
				url: '/profile',
				method: 'PATCH',
				data
			})
		})
	})
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
