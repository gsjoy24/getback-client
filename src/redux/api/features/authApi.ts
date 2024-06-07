import { baseApi } from '../baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				data
			})
		}),
		register: builder.mutation({
			query: (data) => ({
				url: '/users/register',
				method: 'POST',
				data
			})
		}),
		changePassword: builder.mutation({
			query: (data) => ({
				url: '/auth/change-password',
				method: 'PUT',
				data
			})
		})
	})
});

export const { useLoginMutation, useRegisterMutation, useChangePasswordMutation } = authApi;
