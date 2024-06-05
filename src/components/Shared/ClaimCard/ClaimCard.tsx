import TClaim from '@/types/claim';
import BlockIcon from '@mui/icons-material/Block';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import SimpleImageSlider from 'react-simple-image-slider';

const ClaimCard = ({ item }: { item: TClaim }) => {
	const { id, status, description, pictures, user } = item;
	const images = pictures.map((picture: any) => ({ url: picture }));
	return (
		<Card
			sx={{
				maxWidth: 330,
				height: 370,
				position: 'relative',
				'& image': {
					overflow: 'hidden'
				}
			}}
		>
			<SimpleImageSlider width={330} height={200} images={images} showNavs={true} navSize={25} showBullets={false} />
			<CardContent
				sx={{
					position: 'relative'
				}}
			>
				<Box
					sx={{
						display: 'flex',
						gap: 1,
						alignItems: 'center',
						mb: 1
					}}
				>
					<PersonIcon />
					<Typography variant='h5'>{user?.name}</Typography>
					<Typography
						variant='body2'
						sx={{ fontSize: 12 }}
						className={
							status === 'PENDING' ? 'text-yellow-500' : status === 'APPROVED' ? 'text-green-500' : 'text-red-500'
						}
					>
						{status}
					</Typography>
				</Box>

				<Typography variant='body2' className='line-clamp-2'>
					{description}
				</Typography>

				<Box
					sx={{
						display: 'flex',
						gap: 1,
						alignItems: 'center',
						mt: '5px'
					}}
				>
					<EmailIcon />
					<Typography variant='body2'>{user?.email}</Typography>
				</Box>
			</CardContent>
			<CardActions
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					backgroundColor: 'primary.main',
					transition: 'all 0.3s',
					'&:hover': {
						backgroundColor: 'primary.dark'
					}
				}}
			>
				<Typography
					component={Link}
					href={`/found-items/claims/details/${id}`}
					sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 1,
						color: 'white'
					}}
				>
					<span>See details</span> <IoIosArrowRoundForward size={20} />
				</Typography>
			</CardActions>
		</Card>
	);
};

export default ClaimCard;
