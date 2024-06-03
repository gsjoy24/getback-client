export type TMeta = {
	page: number;
	limit: number;
	total: number;
};

export type TResponseSuccess = {
	success?: boolean;
	data: any;
	meta?: TMeta;
};

export type TGenericErrorResponse = {
	success: boolean;
	statusCode: number;
	message: string;
	errorMassages: TGenericErrorMessage[];
};

export type TGenericErrorMessage = {
	path: string | number;
	message: string;
};
