'use client';
import LFDatePicker from '@/components/Form/LFDatePicker';
import LFForm from '@/components/Form/LFForm';
import LFSelect from '@/components/Form/LFSelect';
import LFInput from '@/components/Form/lFInput';
import MultiImageUploader from '@/components/Shared/MultiImageUploader/MultiImageUploader';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import lostItemSchema from '@/schemas/lostItemSchema';
import { TCategory } from '@/types/category';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack } from '@mui/material';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import { useState } from 'react';

const ReportLostItem = () => {
	const { data: categories } = useGetCategoriesQuery(null);
	const categoryOptions = categories?.map((category: TCategory) => ({
		value: category.id,
		label: category.name
	}));
	const [date, setDate] = useState<Dayjs | null>(null);
	const [dateError, setDateError] = useState<string | null>(null);
	const [imageError, setImageError] = useState<boolean>(false);
	const [imageLinks, setImageLinks] = useState<string[] | null>(null);

	const handleSubmit = (data: any) => {
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
				<LFForm onSubmit={handleSubmit} resolver={zodResolver(lostItemSchema)}>
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
						<LFDatePicker label='Date Lost' setDate={setDate} dateError={dateError} setDateError={setDateError} />
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
						<MultiImageUploader setImageLinks={setImageLinks} imageError={imageError} />
					</Stack>

					{/* uploaded images will be here */}
					{imageLinks && (
						<Stack
							gap={2}
							flexWrap='wrap'
							sx={{
								width: '100%',
								flexDirection: {
									xs: 'column',
									sm: 'row'
								},
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
									style={{ maxWidth: '180px', width: '100%', height: 'auto' }}
								/>
							))}
						</Stack>
					)}

					<Button
						type='submit'
						fullWidth
						sx={{
							mt: 2
						}}
					>
						Submit
					</Button>
				</LFForm>
			</Box>
		</Box>
	);
};

export default ReportLostItem;
