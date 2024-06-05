import { z } from 'zod';

const ClaimResSchema = z.object({
	status: z.string({
		required_error: 'Status is required'
	})
});
