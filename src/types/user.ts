export type TUser = {
	id: string;
	name: string;
	username: string;
	email: string;
	phone: string;
	password: string;
	status: 'ACTIVE' | 'BLOCKED';
	role: 'USER' | 'ADMIN';
	createdAt: string;
	updatedAt: string;
};

export type TAuthState = {
	user: null | TUser;
	token: null | string;
};

export type TUserStatus = 'ACTIVE' | 'BLOCKED';
