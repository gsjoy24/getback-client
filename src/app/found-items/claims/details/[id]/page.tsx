'use client';
import LoadingCompo from '@/app/loading';
import ClaimResponseDialog from '@/components/ClaimResponseDialog/ClaimResponseDialog';
import ConfirmModal from '@/components/ConfirmModal/ConfirmModal';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import { useDeleteClaimMutation, useGetClaimQuery } from '@/redux/api/features/claimApi';
import { getUserInfo } from '@/services/auth.services';
import DateToString from '@/utils/DateToString';
import LinkIcon from '@mui/icons-material/Link';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { toast } from 'sonner';

const ClaimDetails = () => {
	const router = useRouter();
	const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
	const { id } = useParams<{ id: string }>();
	const userInfo = getUserInfo();
	const { data, isFetching } = useGetClaimQuery(id);
	const [deleteClaim, { isLoading: isDeleting }] = useDeleteClaimMutation();

	const handleDelete = async () => {
		try {
			const res = await deleteClaim(id);
			if (res?.data?.success) {
				toast.success('Claim deleted successfully');
				router.push('/my-profile/claims');
			}
		} catch (error) {}
	};

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
					{userInfo?.id === user?.id ? (
						<div className='flex justify-center md:justify-start items-center gap-3'>
							{/* delete and edit button */}
							<Button color='error' onClick={() => setIsDeleteOpen(true)} disabled={isDeleting}>
								{isDeleting ? 'Deleting...' : 'Delete'}
							</Button>
							<Button>Edit</Button>
						</div>
					) : data?.data?.status === 'PENDING' ? (
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
			<ConfirmModal
				open={isDeleteOpen}
				setOpen={setIsDeleteOpen}
				title='Delete Claim'
				desc='Are you sure you want to delete this claim?'
				confirmHandler={handleDelete}
			/>
		</PrivateRoute>
	);
};

export default ClaimDetails;
