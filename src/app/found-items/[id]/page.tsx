'use client';
import LoadingCompo from '@/app/loading';
import ClaimDialog from '@/components/ClaimDialog/ClaimDialog';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import { useGetFoundItemQuery } from '@/redux/api/features/foundItemApi';
import { getUserInfo } from '@/services/auth.services';
import DateToString from '@/utils/DateToString';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { HiOutlineFolder } from 'react-icons/hi2';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const FoundItemDetails = () => {
	const { id } = useParams<{ id: string }>();
	const userInfo = getUserInfo();
	const { data, isFetching } = useGetFoundItemQuery(id);

	if (isFetching) {
		return <LoadingCompo />;
	} else if (!data?.data) {
		return <EmptyCard />;
	}

	const { userId, itemName, pictures, description, location, foundDate, user, category } = data?.data;

	const images =
		pictures &&
		pictures.map((image: string) => ({
			original: image,
			thumbnail: image
		}));

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
					<strong>Found By:</strong> {user?.name} <br />
					<strong>Location:</strong> {location} <br />
					<strong>Found Date:</strong> {DateToString(foundDate)}
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

				{userInfo?.id === userId ? (
					<Button component={Link} href={`/found-items/claims/${id}`} sx={{ mt: 2 }}>
						See Claims
					</Button>
				) : (
					<ClaimDialog item={data?.data} />
				)}
			</Box>
		</Stack>
	);
};

export default FoundItemDetails;
