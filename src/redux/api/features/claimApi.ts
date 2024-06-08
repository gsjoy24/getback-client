import { TQueryParams } from '@/types';
import { baseApi } from '../baseApi';

const claimApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createClaim: build.mutation({
			query: (data) => ({
				url: '/claims',
				method: 'POST',
				data
			})
		}),

		getMyClaims: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/claims/me',
					method: 'GET',
					params
				};
			},
			providesTags: ['Claims', 'My-claims']
		}),

		getClaims: build.query({
			query: (args) => {
				const params = new URLSearchParams();
				args?.forEach((param: TQueryParams) => {
					params.append(param.name, param.value);
				});

				return {
					url: '/claims',
					method: 'GET',
					params
				};
			},
			providesTags: ['Claims', 'My-claims']
		}),

		getClaim: build.query({
			query: (id) => ({
				url: `/claims/${id}`,
				method: 'GET'
			})
		}),

		updateClaim: build.mutation({
			query: ({ id, data }) => ({
				url: `/claims/${id}`,
				method: 'PUT',
				data
			}),
			invalidatesTags: ['Claims', 'My-claims']
		}),

		deleteClaim: build.mutation({
			query: (id) => ({
				url: `/claims/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Claims', 'My-claims']
		}),

		makeResponseToClaim: build.mutation({
			query: ({ id, data }) => ({
				url: `/claims/status/${id}`,
				method: 'PUT',
				data
			}),
			invalidatesTags: ['Claims', 'My-claims']
		})
	})
});

export const {
	useCreateClaimMutation,
	useGetClaimsQuery,
	useGetClaimQuery,
	useUpdateClaimMutation,
	useDeleteClaimMutation,
	useMakeResponseToClaimMutation,
	useGetMyClaimsQuery
} = claimApi;
