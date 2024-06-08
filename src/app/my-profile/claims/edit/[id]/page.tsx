'use client';
import LoadingCompo from '@/app/loading';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import PageTitle from '@/components/Shared/PageTitle';
import { useGetClaimQuery } from '@/redux/api/features/claimApi';
import { Container } from '@mui/material';
import { useParams } from 'next/navigation';
import { FieldValues } from 'react-hook-form';

const EditClaim = () => {
	const { id } = useParams<{ id: string }>();
	const { data, isFetching } = useGetClaimQuery(id);

	if (isFetching) {
		return <LoadingCompo />;
	}
	const handleEdit = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<PrivateRoute>
			<Container>
				<PageTitle title='Edit Your Claim' desc='Make all necessary changes you want!' />
				<LFForm onSubmit={handleEdit} defaultValues={data?.data}>
					<LFInput name='driveUrl' label='Drive Url' />
				</LFForm>
			</Container>
		</PrivateRoute>
	);
};

export default EditClaim;
