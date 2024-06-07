export type TUser = {
	id: string;
	name: string;
	email: string;
	phone: string;
	password: string;
	status: 'ACTIVE' | 'BLOCKED';
	role: 'user' | 'admin';
	createdAt: string;
	updatedAt: string;
};
