import { TQueryParams } from '@/types';
import { baseApi } from './baseApi';

const foundItemApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createFoundItem: build.mutation({
			query: (data) => ({
				url: '/found-items',
				method: 'POST',
				data
			}),
			invalidatesTags: ['FoundItems']
		}),

		getMyFoundItems: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/my-found-items',
					method: 'GET',
					params
				};
			},
			providesTags: ['FoundItems']
		}),

		getFoundItems: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/found-items',
					method: 'GET',
					params
				};
			},
			providesTags: ['FoundItems']
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
