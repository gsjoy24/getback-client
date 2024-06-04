'use client';
import LFDatePicker from '@/components/Form/LFDatePicker';
import LFForm from '@/components/Form/LFForm';
import LFSelect from '@/components/Form/LFSelect';
import LFInput from '@/components/Form/lFInput';
import MultiImageUploader from '@/components/Shared/MultiImageUploader/MultiImageUploader';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import { useCreateLostItemMutation } from '@/redux/api/lostItemApi';
import lostItemSchema from '@/schemas/lostItemSchema';
import { isLoggedIn } from '@/services/auth.services';
import { TCategory } from '@/types/category';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack } from '@mui/material';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const ReportFoundItem = () => {
	const router = useRouter();
	const { data: categoriesData } = useGetCategoriesQuery(null);

	const isUserLoggedIn = isLoggedIn();
	if (isUserLoggedIn === false) {
		toast.error('You need to login to report a lost item!');
		router.push('/login');
	}

	const categoryOptions = categoriesData?.data?.map((category: TCategory) => ({
		value: category.id,
		label: category.name
	}));

	const [date, setDate] = useState<Dayjs | null>(null);
	const [dateError, setDateError] = useState<string | null>(null);
	const [imageError, setImageError] = useState<boolean>(false);
	const [imageLinks, setImageLinks] = useState<string[] | null>(null);
	const [resetForm, setResetForm] = useState<boolean>(false);
	const [createLostItem, { isLoading }] = useCreateLostItemMutation();

	const handleSubmit = async (data: any) => {
		setDateError(null);
		setImageError(false);

		if (!date) {
			setDateError('Please select a date');
			return;
		}

		if (!imageLinks?.length) {
			setImageError(true);
			return;
		}

		data.lostDate = date.toISOString();
		data.pictures = imageLinks;

		try {
			const res = await createLostItem(data);
			if (res?.data?.success) {
				setResetForm(true);
				setImageLinks(null);
				toast.success(res?.data?.message);
				router.push('/lost-items');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Box>
			<PageTitle
				title='Report Your Lost Belonging'
				desc='Submit your report and let the community assist in finding your lost item.'
			/>
			<Box
				sx={{
					maxWidth: 800,
					mx: 'auto',
					p: 2,
					my: 2
				}}
			>
				<LFForm onSubmit={handleSubmit} resolver={zodResolver(lostItemSchema)} resetForm={resetForm}>
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
						<MultiImageUploader setImageLinks={setImageLinks} imageError={imageError} setImageError={setImageError} />
					</Stack>

					{/* uploaded images will be here */}
					{imageLinks && (
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
							{imageLinks.map((link, index) => (
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
					)}

					<Button
						type='submit'
						fullWidth
						sx={{
							mt: 2
						}}
						disabled={isLoading || !isUserLoggedIn}
					>
						{isLoading ? 'Submitting...' : 'Submit Report'}
					</Button>
				</LFForm>
			</Box>
		</Box>
	);
};

export default ReportFoundItem;
