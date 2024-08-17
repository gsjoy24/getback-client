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

		deleteCategory: build.mutation({
			query: (id) => ({
				url: `/categories/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Categories']
		})
	})
});

export const { useCreateCategoryMutation, useGetCategoriesQuery, useDeleteCategoryMutation } = categoryApi;
