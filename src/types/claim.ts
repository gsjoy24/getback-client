import { TFoundItem } from './foundItem';
import { TUser } from './user';

type TClaim = {
	id: string;
	userId: string;
	foundItemId: string;
	response: string;
	status: 'PENDING' | 'APPROVED' | 'REJECTED';
	description: string;
	pictures: string[];
	driveUrl?: string;
	lostDate: string;
	createdAt: string;
	updatedAt: string;
	user?: TUser;
	foundItem?: TFoundItem;
};

export default TClaim;
