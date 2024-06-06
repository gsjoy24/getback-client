import { z } from 'zod';

const ChangePasswordValidationSchema = z
	.object({
		oldPassword: z.string({
			message: 'Enter your current password'
		}),
		newPassword: z.string({
			message: 'Enter your new password'
		}),
		confirm_password: z.string({
			message: 'Enter your new password again'
		})
	})
	.superRefine(({ confirm_password, newPassword }, ctx) => {
		if (confirm_password !== newPassword) {
			ctx.addIssue({
				code: 'custom',
				message: 'The passwords did not match!',
				path: ['confirm_password']
			});
		}
	});

export default ChangePasswordValidationSchema;
