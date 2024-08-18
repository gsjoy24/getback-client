import { z } from 'zod';
const addCategorySchema = z.object({
	name: z
		.string({ required_error: 'Please enter the category name!' })
		.min(3, 'Category name must be at least 3 characters!')
});

export default addCategorySchema;
