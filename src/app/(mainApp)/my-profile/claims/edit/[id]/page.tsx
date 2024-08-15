'use client';
import LoadingCompo from '@/app/loading';
import LFDatePicker from '@/components/Form/LFDatePicker';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import MultiImageUploader from '@/components/Shared/MultiImageUploader/MultiImageUploader';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetClaimQuery, useUpdateClaimMutation } from '@/redux/api/features/claimApi';
import claimItemSchema from '@/schemas/claimItemSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Container, Stack, ToggleButton, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

const EditClaim = () => {
	const { id } = useParams<{ id: string }>();
	const router = useRouter();
	const { data, isFetching } = useGetClaimQuery(id);
	const [updateClaim, { isLoading }] = useUpdateClaimMutation();
	const [date, setDate] = useState<Dayjs | null>(null);

	const [dateError, setDateError] = useState<string | null>(null);
	const [imageError, setImageError] = useState<boolean>(false);
	const [imageLinks, setImageLinks] = useState<string[]>(data?.data?.pictures || []);

	const toggleImage = (index: number) => {
		const selectedImage = data?.data?.pictures[index];
		const isImageSelected = imageLinks?.includes(selectedImage);

		if (isImageSelected) {
			const filteredImages = imageLinks?.filter((image) => image !== selectedImage);
			setImageLinks(filteredImages);
		} else {
			setImageLinks([...imageLinks, selectedImage]);
		}
	};

	const isImageSelected = (index: number) => {
		const selectedImage = data?.data?.pictures[index];
		return imageLinks?.includes(selectedImage);
	};

	if (isFetching || !data?.data) {
		return <LoadingCompo />;
	}

	const { pictures = [], lostDate = '' } = data?.data;

	const handleEdit = async (data: FieldValues) => {
		const modifiedData = {
			...data,
			lostDate: date ? date.toISOString() : lostDate,
			pictures: imageLinks?.length ? imageLinks : pictures
		};

		try {
			const res = await updateClaim({ id, data: modifiedData });
			if (res?.data?.success) {
				toast.success('Claim updated successfully!');
				router.push(`/found-items/claims/details/${id}?updated=${new Date().getTime()}`);
			} else {
				toast.error(res?.data?.message);
			}
		} catch (error) {}
	};

	return (
		<PrivateRoute>
			<Container
				sx={{
					py: 3
				}}
			>
				<PageTitle title='Edit Your Claim' desc='Make all necessary changes you want!' />
				<LFForm onSubmit={handleEdit} resolver={zodResolver(claimItemSchema)} defaultValues={data?.data}>
					<Stack
						justifyContent='center'
						alignItems='center'
						gap={2}
						direction={{
							xs: 'column',
							sm: 'row'
						}}
						mb={3}
					>
						<LFInput name='driveUrl' label='Drive URL of all documents if you have (Optional)' />
						<LFDatePicker label='Date (optional)' setDate={setDate} dateError={dateError} setDateError={setDateError} />
					</Stack>
					<Stack
						gap={2}
						sx={{
							width: '100%',
							flexDirection: {
								xs: 'column',
								sm: 'row'
							},
							mb: 3
						}}
					>
						<LFInput label='Description' name='description' multiline rows={5} />
						<MultiImageUploader
							setImageLinks={setImageLinks}
							imageError={imageError}
							setImageError={setImageError}
							title='Upload new images or select from old!'
						/>
					</Stack>

					{/* old images will be here */}
					{pictures.length && (
						<>
							<Typography
								variant='h6'
								align='center'
								sx={{
									mb: 2
								}}
							>
								Current Images
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexWrap: 'wrap',
									gap: 2,
									width: '100%',
									mb: 3
								}}
							>
								{pictures?.map((link: string, index: number) => (
									<div key={link} className='relative'>
										<ToggleButton
											value='check'
											selected={isImageSelected(index)}
											sx={{
												position: 'absolute',
												top: '-15px',
												right: '-15px',
												backgroundColor: 'white',
												borderRadius: '50%',
												zIndex: 1,
												p: '5px',
												'&:hover': {
													backgroundColor: 'white'
												}
											}}
											onChange={() => {
												toggleImage(index);
											}}
										>
											{isImageSelected(index) ? <CloseIcon /> : <CheckIcon />}
										</ToggleButton>
										<Image
											src={link}
											width={150}
											height={150}
											alt='lost item'
											style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
										/>
									</div>
								))}
							</Box>
						</>
					)}

					{/* uploaded images will be here */}
					{imageLinks?.length > 0 && (
						<>
							<Typography variant='h6' align='center'>
								New Images
							</Typography>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexWrap: 'wrap',
									gap: 2,
									width: '100%',
									m: 3
								}}
							>
								{imageLinks?.map((link: string) => (
									<Image
										key={link}
										src={link}
										width={150}
										height={150}
										alt='lost item'
										style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
									/>
								))}
							</Box>
						</>
					)}

					<Button type='submit' sx={{ width: '100%', mt: 2 }} disabled={isLoading || !imageLinks?.length}>
						{isLoading ? 'Updating...' : 'Update'}
					</Button>
				</LFForm>
			</Container>
		</PrivateRoute>
	);
};

export default EditClaim;
