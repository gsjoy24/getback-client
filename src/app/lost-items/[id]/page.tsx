'use client';
import LoadingCompo from '@/app/loading';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import { useGetLostItemQuery } from '@/redux/api/features/lostItemApi';
import DateToString from '@/utils/DateToString';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { HiOutlineFolder } from 'react-icons/hi2';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const LostItemDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isFetching } = useGetLostItemQuery(id);

	if (isFetching) {
		return <LoadingCompo />;
	} else if (!data?.data) {
		return <EmptyCard />;
	}

	const {
		itemName = '',
		pictures = [],
		description = '',
		location = '',
		lostDate = '',
		user = {},
		category = ''
	} = data?.data || {};

	const images =
		pictures?.map((image: string) => ({
			original: image,
			thumbnail: image
		})) || [];

	return (
		<Stack
			direction={{
				xs: 'column',
				sm: 'row'
			}}
			gap={3}
			justifyContent='center'
			alignItems='center'
		>
			<Box>
				<ImageGallery items={images || []} lazyLoad />
			</Box>
			<Box
				sx={{
					width: {
						xs: '100%',
						sm: '60%'
					},
					p: 2
				}}
			>
				<Chip
					label={category?.name}
					variant='outlined'
					size='small'
					sx={{
						px: 2,
						mb: 1
					}}
					avatar={<HiOutlineFolder size={7} />}
				/>
				<Typography variant='h4'>{itemName}</Typography>
				<Typography variant='body2' mt={2}>
					<strong>Lost By:</strong> {user?.name} <br />
					<strong>Email:</strong> {user?.email} <br />
					<strong>Phone:</strong> {user?.phone} <br />
					<strong>Location:</strong> {location} <br />
					<strong>Lost Date:</strong> {DateToString(lostDate)}
				</Typography>
				<Typography
					variant='body2'
					component='pre'
					mt={2}
					sx={{
						whiteSpace: 'pre-line'
					}}
				>
					{description}
				</Typography>
			</Box>
		</Stack>
	);
};

export default LostItemDetails;
