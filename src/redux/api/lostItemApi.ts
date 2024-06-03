import { baseApi } from './baseApi';

const lostItemApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createLostItem: build.mutation({
			query: (data) => ({
				url: '/lost-items',
				method: 'POST',
				data
			})
		}),

		getLostItems: build.query({
			query: () => ({
				url: '/lost-items',
				method: 'GET'
			})
		}),

		getLostItem: build.query({
			query: (id) => ({
				url: `/lost-items/${id}`,
				method: 'GET'
			})
		}),

		updateLostItem: build.mutation({
			query: ({ id, data }) => ({
				url: `/lost-items/${id}`,
				method: 'PATCH',
				data
			})
		}),

		deleteLostItem: build.mutation({
			query: (id) => ({
				url: `/lost-items/${id}`,
				method: 'DELETE'
			})
		})
	})
});

export const {
	useCreateLostItemMutation,
	useGetLostItemsQuery,
	useGetLostItemQuery,
	useUpdateLostItemMutation,
	useDeleteLostItemMutation
} = lostItemApi;
