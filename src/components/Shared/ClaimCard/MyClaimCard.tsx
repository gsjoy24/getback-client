import TClaim from '@/types/claim';
import { Box, Button, ButtonGroup, Card, CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import SimpleImageSlider from 'react-simple-image-slider';
import ClaimCardOptions from '../CardOptions/ClaimCardOptions';

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
					<ClaimCardOptions item={item} />
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
			<ButtonGroup
				sx={{
					position: 'absolute',
					bottom: 0,
					left: 0,
					width: '100%'
				}}
				variant='contained'
				aria-label='Basic button group'
			>
				<Button fullWidth component={Link} href={`/found-items/${foundItem?.id}`}>
					See Item
				</Button>
				<Button fullWidth component={Link} href={`/found-items/claims/details/${id}`}>
					See Details
				</Button>
			</ButtonGroup>
		</Card>
	);
};

export default MyClaimCard;
