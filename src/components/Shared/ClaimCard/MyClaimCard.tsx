import TClaim from '@/types/claim';
import { Box, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import SimpleImageSlider from 'react-simple-image-slider';

const MyClaimCard = ({ item }: { item: TClaim }) => {
	const { id, status, description, pictures, foundItem, response } = item;
	const images = pictures.map((picture: any) => ({ url: picture }));

	return (
		<Card
			sx={{
				maxWidth: 330,
				height: 390,
				position: 'relative',
				'& image': {
					overflow: 'hidden'
				}
			}}
		>
			<SimpleImageSlider
				width={330}
				height={200}
				images={images}
				showNavs={true}
				navSize={25}
				showBullets={false}
				autoPlay={true}
			/>
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
					<Typography variant='h5'>{foundItem?.itemName}</Typography>
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

				<Typography
					variant='body2'
					className='line-clamp-2'
					sx={{
						mb: 1
					}}
				>
					{description}
				</Typography>

				<Typography variant='body2' className='line-clamp-2'>
					{response}
				</Typography>
			</CardContent>
			<CardActions
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%',
					backgroundColor: 'primary.main'
				}}
			>
				<div className='flex justify-center items-center flex-row w-full'>
					<Typography
						component={Link}
						href={`/found-items/${foundItem?.id}`}
						sx={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 1,
							color: 'white',
							transition: 'all 0.3s',
							'&:hover': {
								textDecoration: 'underline'
							}
						}}
					>
						<span>See Item</span> <IoIosArrowRoundForward size={20} />
					</Typography>
					<Divider orientation='vertical' flexItem />
					<Typography
						component={Link}
						href={`/found-items/claims/details/${id}`}
						sx={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 1,
							color: 'white',
							transition: 'all 0.3s',
							'&:hover': {
								textDecoration: 'underline'
							}
						}}
					>
						<span>See Details</span> <IoIosArrowRoundForward size={20} />
					</Typography>
				</div>
			</CardActions>
		</Card>
	);
};

export default MyClaimCard;
