import { z } from 'zod';
const LoginValidationSchema = z.object({
	email: z.string({ required_error: 'Please enter the email!' }).email({
		message: 'Invalid email address!'
	}),
	password: z
		.string({
			required_error: 'Please enter the password!'
		})
		.min(6, 'Password must be at least 6 characters!')
});

export default LoginValidationSchema;
