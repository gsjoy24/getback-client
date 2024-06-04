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
			query: () => ({
				url: '/my-claims',
				method: 'GET'
			})
		}),

		getClaims: build.query({
			query: () => ({
				url: '/claims',
				method: 'GET'
			})
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
			})
		}),

		deleteClaim: build.mutation({
			query: (id) => ({
				url: `/claims/${id}`,
				method: 'DELETE'
			})
		})
	})
});

export const {
	useCreateClaimMutation,
	useGetClaimsQuery,
	useGetClaimQuery,
	useUpdateClaimMutation,
	useDeleteClaimMutation
} = claimApi;
