'use client';
import LFDatePicker from '@/components/Form/LFDatePicker';
import LFForm from '@/components/Form/LFForm';
import LFSelect from '@/components/Form/LFSelect';
import LFInput from '@/components/Form/lFInput';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import { TCategory } from '@/types/category';
import { Box, Button, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

const ReportLostItem = () => {
	const [date, setDate] = useState<Dayjs | null>(null);
	const [dateError, setDateError] = useState<string | null>(null);
	const { data: categories } = useGetCategoriesQuery(null);
	const categoryOptions = categories?.map((category: TCategory) => ({
		value: category.id,
		label: category.name
	}));

	const handleSubmit = (data: any) => {
		setDateError(null);
		if (!date) {
			setDateError('Please select a date');
			return;
		}

		data.lostDate = date.toISOString();
		console.log(data);
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
					p: 2
				}}
			>
				<LFForm onSubmit={handleSubmit}>
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
						<LFSelect label='Item Name' name='categoryId' options={categoryOptions} />
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
					<LFInput label='Description' name='description' multiline rows={3} />

					{/* picture uploader */}

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
