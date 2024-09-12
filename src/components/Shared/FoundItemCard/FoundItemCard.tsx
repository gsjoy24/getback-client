'use client';
import formatDateToString from '@/helpers/formatDateToString';
import { getUserInfo } from '@/services/auth.services';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import SimpleImageSlider from 'react-simple-image-slider';
import FoundCardOptions from '../CardOptions/FoundICardOptions';

const FoundItemCard = ({ item }: any) => {
	const userInfo = getUserInfo();
	const { userId, itemName, description, pictures, location, foundDate } = item;
	const date = formatDateToString(foundDate);
	const images = pictures.map((picture: any) => ({ url: picture }));

	return (
		<Card
			sx={{
				maxWidth: 345,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				boxShadow: 3,
				borderRadius: 2,
				overflow: 'hidden',
				position: 'relative',
				transition: 'transform 0.3s ease',
				'&:hover': {
					transform: 'translateY(-5px)'
				}
			}}
		>
			{/* Image Slider */}
			<CardMedia component='div'>
				<SimpleImageSlider
					width={345}
					height={200}
					images={images}
					showNavs={true}
					autoPlay={true}
					navSize={20}
					showBullets={false}
					style={{ borderRadius: '8px' }}
				/>
			</CardMedia>

			{/* Card Content */}
			<CardContent sx={{ p: 3, flexGrow: 1 }}>
				{/* User-specific actions */}
				{userInfo?.id === userId && <FoundCardOptions item={item} />}

				<Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1.5 }}>
					{itemName}
				</Typography>

				<Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
					{description.length > 100 ? `${description.substring(0, 100)}...` : description}
				</Typography>

				{/* Location and Date */}
				<Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
					<IoLocationSharp size={18} style={{ marginRight: '8px' }} />
					<Typography variant='body2'>{location}</Typography>
				</Box>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<FaCalendarAlt size={14} style={{ marginRight: '8px' }} />
					<Typography variant='body2'>{date}</Typography>
				</Box>
			</CardContent>

			{/* Card Actions */}
			<CardActions
				sx={{
					backgroundColor: 'primary.main',
					p: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					transition: 'background-color 0.3s',
					'&:hover': {
						backgroundColor: 'primary.dark'
					}
				}}
			>
				<Button
					component={Link}
					href={`/found-items/${item.id}`}
					fullWidth
					sx={{
						color: 'white',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 1,
						textTransform: 'none'
					}}
				>
					See Details <IoIosArrowRoundForward size={20} />
				</Button>
			</CardActions>
		</Card>
	);
};

export default FoundItemCard;
