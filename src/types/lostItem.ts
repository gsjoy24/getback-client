import { TCategory } from './category';
import { TUser } from './user';

export type TLostItem = {
	id: string;
	userId: string;
	categoryId: string;
	itemName: string;
	description: string;
	location: string;
	lostDate: string;
	pictures: string[];
	isFound: boolean;
	createdAt: string;
	updatedAt: string;
	user?: TUser;
	category?: TCategory;
};
