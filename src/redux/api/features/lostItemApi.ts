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
			invalidatesTags: ['LostItems']
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
			}
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
			invalidatesTags: ['LostItems']
		})
	})
});

export const {
	useCreateLostItemMutation,
	useGetMyLostItemsQuery,
	useGetLostItemsQuery,
	useGetLostItemQuery,
	useUpdateLostItemMutation,
	useDeleteLostItemMutation
} = lostItemApi;
