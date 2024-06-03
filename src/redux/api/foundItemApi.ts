import { baseApi } from './baseApi';

const foundItemApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createFoundItem: build.mutation({
			query: (data) => ({
				url: '/found-items',
				method: 'POST',
				data
			})
		}),

		getMyFoundItems: build.query({
			query: () => ({
				url: '/my-found-items',
				method: 'GET'
			})
		}),

		getFoundItems: build.query({
			query: () => ({
				url: '/found-items',
				method: 'GET'
			})
		}),

		getFoundItem: build.query({
			query: (id) => ({
				url: `/found-items/${id}`,
				method: 'GET'
			})
		}),

		updateFoundItem: build.mutation({
			query: ({ id, data }) => ({
				url: `/found-items/${id}`,
				method: 'PUT',
				data
			})
		}),

		deleteFoundItem: build.mutation({
			query: (id) => ({
				url: `/found-items/${id}`,
				method: 'DELETE'
			})
		})
	})
});

export const {
	useCreateFoundItemMutation,
	useGetFoundItemsQuery,
	useGetFoundItemQuery,
	useUpdateFoundItemMutation,
	useDeleteFoundItemMutation
} = foundItemApi;
