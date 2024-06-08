'use client';
import LoadingCompo from '@/app/loading';
import LFDatePicker from '@/components/Form/LFDatePicker';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import MultiImageUploader from '@/components/Shared/MultiImageUploader/MultiImageUploader';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetClaimQuery } from '@/redux/api/features/claimApi';
import claimItemSchema from '@/schemas/claimItemSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Key, useState } from 'react';
import { FieldValues } from 'react-hook-form';

const EditClaim = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isFetching } = useGetClaimQuery(id);

	const [date, setDate] = useState<Dayjs | null>(data?.data?.lostDate || null);
	const [dateError, setDateError] = useState<string | null>(null);
	const [imageError, setImageError] = useState<boolean>(false);
	const [imageLinks, setImageLinks] = useState<string[] | null>(null);
	const isLoading = false;

	if (isFetching || !data?.data) {
		return <LoadingCompo />;
	}

	const { pictures } = data?.data;
	const handleEdit = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<PrivateRoute>
			<Container>
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
							title='Upload new images to replace old ones!'
						/>
					</Stack>

					{/* old images will be here */}
					{pictures.length && (
						<>
							<Typography variant='h6' align='center'>
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
								{pictures?.map((link: string, index: Key) => (
									<Image
										key={index}
										src={link}
										width={100}
										height={100}
										alt='lost item'
										style={{ maxWidth: '150px', width: '100%', height: 'auto' }}
									/>
								))}
							</Box>
						</>
					)}

					{/* uploaded images will be here */}
					{imageLinks.length && (
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
								{imageLinks?.map((link: string, index: Key) => (
									<Image
										key={index}
										src={link}
										width={100}
										height={100}
										alt='lost item'
										style={{ maxWidth: '150px', width: '100%', height: 'auto' }}
									/>
								))}
							</Box>
						</>
					)}

					<Button type='submit' sx={{ width: '100%', mt: 2 }} disabled={isLoading}>
						{isLoading ? 'Claiming...' : 'Claim'}
					</Button>
				</LFForm>
			</Container>
		</PrivateRoute>
	);
};

export default EditClaim;
