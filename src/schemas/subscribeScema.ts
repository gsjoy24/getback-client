import { z } from 'zod';

const subscribeSchema = z.object({
	email: z.string({ required_error: 'Please enter the email!' }).email({
		message: 'Invalid email address!'
	})
});

export default subscribeSchema;
