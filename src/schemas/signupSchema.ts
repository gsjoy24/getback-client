import { z } from 'zod';
const signupSchema = z
	.object({
		name: z
			.string({
				required_error: 'Name is required!'
			})
			.min(3, {
				message: 'Name must be at least 3 characters!'
			})
			.max(255),
		username: z.string({
			required_error: 'Username is required!'
		}),
		email: z
			.string({
				required_error: 'Email is required!'
			})
			.email({
				message: 'Invalid email address!'
			}),
		phone: z
			.string({
				required_error: 'Phone number is required!'
			})
			.min(11, {
				message: 'Phone number must be at least 11 characters!'
			})
			.max(14, {
				message: 'Phone number must be at most 14 characters!'
			}),
		password: z
			.string({
				required_error: 'Password is required!'
			})
			.min(6, {
				message: 'Password must be at least 6 characters!'
			})
			.max(25, {
				message: 'Password must be at most 25 characters!'
			}),
		confirm_password: z
			.string({
				required_error: 'Password is required!'
			})
			.min(6, {
				message: 'Password must be at least 6 characters!'
			})
			.max(25, {
				message: 'Password must be at most 25 characters!'
			}),
		profile: z.object({
			bio: z.string({
				required_error: 'Bio is required!',
				invalid_type_error: 'Bio must be a string!'
			}),
			age: z.string({
				required_error: 'Age is required!'
			})
		})
	})
	.superRefine(({ confirm_password, password }, ctx) => {
		if (confirm_password !== password) {
			ctx.addIssue({
				code: 'custom',
				message: 'The passwords did not match!',
				path: ['confirm_password']
			});
		}
	});

export default signupSchema;
