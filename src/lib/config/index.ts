const serverURL = process.env.NEXT_PUBLIC_SERVER_URL as string;
const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
const cloudinaryApiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string;
const cloudinaryApiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET as string;

const config = {
	serverURL,
	cloudinary: {
		cloudName: cloudinaryCloudName,
		apiKey: cloudinaryApiKey,
		apiSecret: cloudinaryApiSecret
	}
};

export default config;
