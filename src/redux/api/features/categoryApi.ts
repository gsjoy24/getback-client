import { baseApi } from '../baseApi';

const categoryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createCategory: build.mutation({
			query: (data) => ({
				url: '/categories',
				method: 'POST',
				data
			}),
			invalidatesTags: ['Categories']
		}),

		getCategories: build.query({
			query: () => ({
				url: '/categories',
				method: 'GET'
			}),
			providesTags: ['Categories']
		}),

		updateCategory: build.mutation({
			query: ({ id, name }) => ({
				url: `/categories/${id}`,
				method: 'PUT',
				data: { name }
			}),
			invalidatesTags: ['Categories']
		}),

		deleteCategory: build.mutation({
			query: (id) => ({
				url: `/categories/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Categories']
		})
	})
});

export const {
	useCreateCategoryMutation,
	useGetCategoriesQuery,
	useUpdateCategoryMutation,
	useDeleteCategoryMutation
} = categoryApi;
