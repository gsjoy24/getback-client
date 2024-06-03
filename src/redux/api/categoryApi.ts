import { baseApi } from './baseApi';

const categoryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createCategory: build.mutation({
			query: (data) => ({
				url: '/categories',
				method: 'POST',
				data
			}),
			invalidatesTags: ['Category']
		}),

		getCategories: build.query({
			query: () => ({
				url: '/categories',
				method: 'GET'
			}),
			providesTags: ['Category'] as const
		}),

		deleteCategory: build.mutation({
			query: (id) => ({
				url: `/categories/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Category']
		})
	})
});

export const { useCreateCategoryMutation, useGetCategoriesQuery } = categoryApi;
