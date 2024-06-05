import { TCategory } from './category';
import { TUser } from './user';

export type TFoundItem = {
	id: string;
	userId: string;
	categoryId: string;
	itemName: string;
	description: string;
	location: string;
	foundDate: string;
	pictures: string[];
	isReturned: boolean;
	createdAt: string;
	updatedAt: string;
	user?: TUser;
	category?: TCategory;
};
