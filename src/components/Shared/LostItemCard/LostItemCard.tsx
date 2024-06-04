'use client';
import formatDateToString from '@/helpers/formatDateToString';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import SimpleImageSlider from 'react-simple-image-slider';

const LostItemCard = ({ item }: any) => {
	const { itemName, description, pictures, location, lostDate } = item;
	const date = formatDateToString(lostDate);
	const images = pictures.map((picture: any) => ({ url: picture }));
	return (
		<Card
			sx={{
				maxWidth: 330,
				height: 400,
				position: 'relative',
				'& image': {
					overflow: 'hidden'
				}
			}}
		>
			<SimpleImageSlider width={330} height={200} images={images} showNavs={true} navSize={25} showBullets={false} />
			<CardContent>
				<Typography gutterBottom variant='h5'>
					{itemName}
				</Typography>
				<Typography variant='body2' className='line-clamp-2'>
					{description}
				</Typography>
				<Box className='flex gap-2 items-center mt-2'>
					<Box sx={{ minWidth: 20 }}>
						<IoLocationSharp size={18} />
					</Box>
					<Typography variant='body2'>{location}</Typography>
				</Box>
				<Box className='flex gap-2 items-center mt-2'>
					<Box sx={{ minWidth: 20 }}>
						<FaCalendarAlt size={14} />
					</Box>
					<Typography variant='body2'>{date}</Typography>
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
					href={`/lost-items/${item.id}`}
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

export default LostItemCard;
