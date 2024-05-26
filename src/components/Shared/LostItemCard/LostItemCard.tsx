'use client';
import formatDateToString from '@/helpers/formatDateToString';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaCalendarAlt } from 'react-icons/fa';
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
				height: 520,
				position: 'relative',
				'& image': {
					overflow: 'hidden'
				}
			}}
		>
			<SimpleImageSlider width={330} height={200} images={images} showNavs={true} navSize={25} showBullets={false} />
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{itemName}
				</Typography>
				<Typography variant='body2'>{description}</Typography>
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
					bottom: 0
				}}
			>
				<Button size='small'>Share</Button>
				<Button size='small'>Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default LostItemCard;
