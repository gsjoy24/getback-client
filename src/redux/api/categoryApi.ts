import { baseApi } from './baseApi';

const categoryApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		createCategory: build.mutation({
			query: (data) => ({
				url: '/categories',
				method: 'POST',
				data
			})
		}),

		getCategories: build.query({
			query: () => ({
				url: '/categories',
				method: 'GET'
			})
		})
	})
});

export const { useCreateCategoryMutation, useGetCategoriesQuery } = categoryApi;
