import { TFoundItem } from './foundItem';
import { TUser } from './user';

type TClaim = {
	userId: string;
	foundItemId: string;
	response: string;
	status: 'PENDING' | 'APPROVED' | 'REJECTED';
	description: string;
	pictures: string[];
	driveUrl?: string;
	createdAt: string;
	updatedAt: string;
	user?: TUser;
	foundItem?: TFoundItem;
};

export default TClaim;
