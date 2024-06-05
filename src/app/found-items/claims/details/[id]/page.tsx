'use client';
import LoadingCompo from '@/app/loading';
import ClaimResponseDialog from '@/components/ClaimResponseDialog/ClaimResponseDialog';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import { useGetClaimQuery } from '@/redux/api/features/claimApi';
import DateToString from '@/utils/DateToString';
import LinkIcon from '@mui/icons-material/Link';
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ClaimDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isFetching } = useGetClaimQuery(id);

	if (isFetching) {
		return <LoadingCompo />;
	} else if (!data?.data) {
		return <EmptyCard />;
	}

	const { description, pictures, driveUrl, lostDate, user, location } = data?.data;
	const images =
		pictures &&
		pictures.map((image: string) => ({
			original: image,
			thumbnail: image
		}));

	return (
		<PrivateRoute>
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
					<ReactImageGallery items={images || []} lazyLoad />
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
					<Typography variant='body2' mt={2}>
						<strong>Lost By:</strong> {user?.name} <br />
						<strong>Email:</strong> {user?.email} <br />
						<strong>Phone:</strong> {user?.phone} <br />
						<strong>Location:</strong> {location} <br />
						<strong>Found Date:</strong> {DateToString(lostDate)} <br />
						<strong>Status:</strong> {data?.data?.status}
					</Typography>

					{driveUrl && (
						<Typography
							variant='body2'
							component={Link}
							href={driveUrl}
							target='_blank'
							mt={2}
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 1
							}}
						>
							<LinkIcon /> Drive Link
						</Typography>
					)}

					<Typography variant='body2' my={2}>
						{description}
					</Typography>
					{data?.data?.status === 'PENDING' ? (
						<ClaimResponseDialog item={data?.data} />
					) : (
						<Typography
							variant='body2'
							sx={{
								border: '1px solid black',
								padding: '10px',
								display: 'inline-block'
							}}
						>
							Action already taken!
						</Typography>
					)}
				</Box>
			</Stack>
		</PrivateRoute>
	);
};

export default ClaimDetails;
