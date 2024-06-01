import config from '@/lib/config';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	cloud_name: config.cloudinary.cloudName,
	api_key: config.cloudinary.apiKey,
	api_secret: config.cloudinary.apiSecret
});

export async function POST(request: Request) {
	const body = await request.json();
	const { paramsToSign } = body;

	const signature = cloudinary.utils.api_sign_request(paramsToSign, config.cloudinary.apiSecret);

	return Response.json({ signature });
}
