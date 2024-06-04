import { z } from 'zod';

const claimItemSchema = z.object({
	description: z
		.string({
			message: 'Please enter a details.'
		})
		.max(2000, {
			message: 'Description must not exceed 2000 characters.'
		}),
	driveUrl: z
		.string()
		.url({
			message: 'Please enter a valid URL.'
		})
		.optional()
});

export default claimItemSchema;
