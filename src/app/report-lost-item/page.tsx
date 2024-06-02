'use client';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import { Box, Typography } from '@mui/material';

const ReportLostItem = () => {
	const { data: categories } = useGetCategoriesQuery(null);

	const handleSubmit = (data: any) => {
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
					maxWidth: 700,
					mx: 'auto',
					p: 2
				}}
			>
				<LFForm onSubmit={handleSubmit}>
					<LFInput label='Item Name' name='itemName' />
				</LFForm>
			</Box>
		</Box>
	);
};

export default ReportLostItem;
