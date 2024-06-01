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
				border: `${imageError ? '1px dashed red' : '1px dashed #1586FD'}`,
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
					className='absolute top-0 w-full h-full  rounded-[12px]'
				/>
			) : (
				<div
					onClick={openHandler}
					className='flex justify-center items-center h-full flex-col gap-2 cursor-pointer pt-5 md:pt-0'
				>
					<ImageIcon
						sx={{
							fontSize: '3rem',
							color: `${imageError ? 'red' : '#1586FD'}`
						}}
					/>
					<Typography
						sx={{
							color: `${imageError ? 'red' : '#1586FD'}`
						}}
					>
						Upload a profile picture
					</Typography>
				</div>
			)}
		</Box>
	);
};

export default SignupImageUploaderUI;
