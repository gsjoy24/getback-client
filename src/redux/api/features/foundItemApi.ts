import { TQueryParams } from '@/types';
import { baseApi } from '../baseApi';

const foundItemApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createFoundItem: build.mutation({
			query: (data) => ({
				url: '/found-items',
				method: 'POST',
				data
			}),
			invalidatesTags: ['FoundItems', 'My-found-items']
		}),

		getMyFoundItems: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/found-items/me',
					method: 'GET',
					params
				};
			},
			providesTags: ['FoundItems', 'My-found-items']
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
			providesTags: ['FoundItems', 'My-found-items']
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
			}),
			invalidatesTags: ['FoundItems', 'Claims', 'My-found-items']
		}),

		deleteFoundItem: build.mutation({
			query: (id) => ({
				url: `/found-items/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['FoundItems', 'Claims', 'My-found-items']
		}),

		toggleReturnStatus: build.mutation({
			query: ({ id, status }) => ({
				url: `/found-items/${id}`,
				method: 'PUT',
				data: { isReturned: status }
			}),
			invalidatesTags: ['FoundItems', 'My-found-items']
		})
	})
});

export const {
	useCreateFoundItemMutation,
	useGetFoundItemsQuery,
	useGetMyFoundItemsQuery,
	useGetFoundItemQuery,
	useUpdateFoundItemMutation,
	useDeleteFoundItemMutation,
	useToggleReturnStatusMutation
} = foundItemApi;
