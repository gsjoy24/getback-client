'use client';
import LoadingCompo from '@/app/loading';
import LFDatePicker from '@/components/Form/LFDatePicker';
import LFForm from '@/components/Form/LFForm';
import LFSelect from '@/components/Form/LFSelect';
import LFInput from '@/components/Form/lFInput';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import MultiImageUploader from '@/components/Shared/MultiImageUploader/MultiImageUploader';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/features/categoryApi';
import {
	useCreateFoundItemMutation,
	useGetFoundItemQuery,
	useUpdateFoundItemMutation
} from '@/redux/api/features/foundItemApi';
import foundItemSchema from '@/schemas/foundItemSchema';
import { TCategory } from '@/types/category';
import { zodResolver } from '@hookform/resolvers/zod';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Stack, ToggleButton, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const EditFoundItem = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isFetching } = useGetFoundItemQuery(id);
	const router = useRouter();
	const { data: categoriesData } = useGetCategoriesQuery(null);

	const categoryOptions = categoriesData?.data?.map((category: TCategory) => ({
		value: category.id,
		label: category.name
	}));

	const [date, setDate] = useState<Dayjs | null>(null);
	const [dateError, setDateError] = useState<string | null>(null);
	const [imageError, setImageError] = useState<boolean>(false);
	const [imageLinks, setImageLinks] = useState<string[]>([]);
	const [updateFoundItem, { isLoading }] = useUpdateFoundItemMutation();

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
	const { pictures, foundDate } = data?.data;

	const handleSubmit = async (data: any) => {
		const modifiedData = {
			...data,
			lostDate: date ? date.toISOString() : foundDate,
			pictures: imageLinks?.length ? imageLinks : pictures
		};

		try {
			const res = await updateFoundItem({ id, data: modifiedData });
			if (res?.data?.success) {
				setImageLinks([]);
				toast.success(res?.data?.message);
				router.push(`/found-items/${id}?updated=${new Date().getTime()}`);
			}
		} catch (error) {}
	};
	return (
		<PrivateRoute>
			<Box>
				<PageTitle
					title='Update Found Item Report'
					desc='Update the details of the found item report here. Make sure to provide accurate information.'
				/>
				<Box
					sx={{
						maxWidth: 800,
						mx: 'auto',
						p: 2,
						my: 2
					}}
				>
					<LFForm onSubmit={handleSubmit} resolver={zodResolver(foundItemSchema)} defaultValues={data?.data}>
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
							<LFInput label='Item Name' name='itemName' />
							<LFSelect label='Category' name='categoryId' options={categoryOptions} />
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
							<LFInput label='Location' name='location' />
							<LFDatePicker label='Date of found' setDate={setDate} dateError={dateError} setDateError={setDateError} />
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
								title='Upload images of the item!'
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
										<div key={index} className='relative'>
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
									{imageLinks?.map((link: string, index: number) => (
										<Image
											key={index}
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

						<Button
							type='submit'
							fullWidth
							sx={{
								mt: 2
							}}
							disabled={isLoading}
						>
							{isLoading ? 'Submitting...' : 'Submit Report'}
						</Button>
					</LFForm>
				</Box>
			</Box>
		</PrivateRoute>
	);
};

export default EditFoundItem;
