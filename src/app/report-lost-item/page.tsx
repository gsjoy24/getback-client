'use client';
import LFForm from '@/components/Form/LFForm';
import LFSelect from '@/components/Form/LFSelect';
import LFInput from '@/components/Form/lFInput';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetCategoriesQuery } from '@/redux/api/categoryApi';
import { Box, Button, Stack } from '@mui/material';

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
							}
						}}
					>
						<LFInput label='Item Name' name='itemName' />
						<LFSelect label='Item Name' name='categoryId' />
					</Stack>
					<Button type='submit'>Submit</Button>
				</LFForm>
			</Box>
		</Box>
	);
};

export default ReportLostItem;
