'use client';
import LoadingCompo from '@/app/loading';
import ClaimDialog from '@/components/ClaimDialog/ClaimDialog';
import { useGetFoundItemQuery } from '@/redux/api/foundItemApi';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { useParams } from 'next/navigation';
import { HiOutlineFolder } from 'react-icons/hi2';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const FoundItemDetails = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isFetching } = useGetFoundItemQuery(id);

	if (isFetching) {
		return <LoadingCompo />;
	}

	const { itemName, pictures, description, location, foundDate, user, category } = data?.data;

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
					sx={{
						px: 2,
						mb: 1
					}}
					avatar={<HiOutlineFolder size={7} />}
				/>
				<Typography variant='h4'>{itemName}</Typography>
				<Typography variant='body2' mt={2}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat aperiam omnis accusamus optio cum
					dolor officia? Exercitationem commodi fuga quos consectetur necessitatibus mollitia, placeat perspiciatis at a
					temporibus laborum veniam accusamus minus, praesentium iure est aspernatur eius recusandae. Tempore possimus
					autem magnam voluptatem tenetur, nulla impedit iste quis necessitatibus at? Obcaecati eaque perferendis, rerum
					doloremque corporis numquam excepturi ab earum? Ipsam, reprehenderit doloremque. Corporis perferendis possimus
					ullam assumenda illo consectetur labore, error suscipit minima beatae natus, illum necessitatibus ut magni in
					molestiae itaque quasi sequi! Debitis omnis dolores neque recusandae nobis? Consectetur impedit veniam,
					cupiditate laboriosam harum distinctio expedita rerum nihil neque in obcaecati magnam aliquam, similique
					asperiores, eum dolor et tenetur iste minima non. Architecto voluptatem odit a.
				</Typography>
				<Typography variant='body2' mt={2}>
					<strong>Location:</strong> {location} <br />
					<strong>Found Date:</strong> {foundDate} <br />
					<strong>Found By:</strong> {user?.name}
				</Typography>

				<ClaimDialog />
			</Box>
		</Stack>
	);
};

export default FoundItemDetails;
