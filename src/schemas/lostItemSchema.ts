import { z } from 'zod';

const lostItemSchema = z.object({
	itemName: z
		.string({
			required_error: 'Please enter the item name'
		})
		.min(3, {
			message: 'Item name must be at least 3 characters long'
		}),
	categoryId: z.string({
		required_error: 'Please select a category'
	}),
	description: z.string({
		required_error: 'Please enter a description'
	}),
	location: z.string({
		required_error: 'Please enter a location'
	})
});

export default lostItemSchema;
