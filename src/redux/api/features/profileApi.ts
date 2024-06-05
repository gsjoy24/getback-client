import { baseApi } from '../baseApi';

const profileApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query({
			query: () => ({
				url: '/my-profile',
				method: 'GET'
			}),
			providesTags: ['My-profile', 'My-found-items', 'My-lost-items', 'My-claims']
		}),
		updateProfile: build.mutation({
			query: (data) => ({
				url: '/profile',
				method: 'PATCH',
				data
			}),
			invalidatesTags: ['My-profile', 'My-found-items', 'My-lost-items', 'My-claims']
		})
	})
});

export const { useGetProfileQuery, useUpdateProfileMutation } = profileApi;
