import { baseApi } from '../baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: '/auth/login',
				method: 'POST',
				body
			})
		}),
		register: builder.mutation({
			query: (body) => ({
				url: '/users/register',
				method: 'POST',
				body
			})
		}),
		changePassword: builder.mutation({
			query: (body) => ({
				url: '/auth/change-password',
				method: 'PUT',
				body
			})
		})
	})
});

export const { useLoginMutation, useRegisterMutation, useChangePasswordMutation } = authApi;
