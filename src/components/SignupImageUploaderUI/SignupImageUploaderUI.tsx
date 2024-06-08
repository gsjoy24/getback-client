import ImageIcon from '@mui/icons-material/Image';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
type TProps = {
	imageLink: string;
	openHandler: () => void;
	imageError: string;
};

const SignupImageUploaderUI = ({ imageLink, openHandler, imageError }: TProps) => {
	return (
		<Box
			sx={{
				textAlign: 'center',
				borderRadius: '12px',
				height: '100%',
				position: 'relative',
				minHeight: '150px'
			}}
		>
			{imageLink ? (
				<Image
					src={imageLink}
					alt='profile'
					width={100}
					height={100}
					className='absolute top-0 w-full h-full  rounded-[12px] shadow-xl border-2 border-gray-300'
				/>
			) : (
				<div
					onClick={openHandler}
					className={`flex justify-center items-center h-full flex-col gap-2 cursor-pointer pt-5 md:pt-0 w-full border-2 border-dashed border-gray-300 rounded-2xl min-h-[140px] ${
						imageError ? 'border-red-500 text-red-600 animate-pulse' : 'border-gray-300'
					}`}
				>
					<ImageIcon
						sx={{
							fontSize: 40
						}}
					/>
					<Typography>Upload a profile picture</Typography>
					<Typography fontSize={10} lineHeight={0.5}>
						Square shaped is recommended
					</Typography>
				</div>
			)}
		</Box>
	);
};

export default SignupImageUploaderUI;
