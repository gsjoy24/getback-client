import { TQueryParams } from '@/types';
import { baseApi } from '../baseApi';

const lostItemApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createLostItem: build.mutation({
			query: (data) => ({
				url: '/lost-items',
				method: 'POST',
				data
			}),
			invalidatesTags: ['LostItems', 'My-profile', 'My-lost-items']
		}),

		getMyLostItems: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/my-lost-items',
					method: 'GET',
					params
				};
			},
			providesTags: ['My-lost-items']
		}),

		getLostItems: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/lost-items',
					method: 'GET',
					params
				};
			},
			providesTags: ['LostItems']
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
			}),
			invalidatesTags: ({ id }) => [{ type: 'LostItems' }, { type: 'LostItems', id }]
		}),

		deleteLostItem: build.mutation({
			query: (id) => ({
				url: `/lost-items/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['LostItems', 'My-profile', 'My-lost-items']
		}),

		toggleMarkAsFound: build.mutation({
			query: ({ id, status }) => ({
				url: `/lost-items/${id}/`,
				method: 'PATCH',
				data: { isFound: status }
			}),
			invalidatesTags: ['LostItems', 'My-profile', 'My-lost-items']
		})
	})
});

export const {
	useCreateLostItemMutation,
	useGetMyLostItemsQuery,
	useGetLostItemsQuery,
	useGetLostItemQuery,
	useUpdateLostItemMutation,
	useDeleteLostItemMutation,
	useToggleMarkAsFoundMutation
} = lostItemApi;