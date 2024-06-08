import { z } from 'zod';

const DeleteAccountSchema = z.object({
	password: z.string(),
	write: z.string().refine((value) => value === 'BYE GETBACK', {
		message: 'Invalid confirmation'
	})
});

export default DeleteAccountSchema;
