'use client';
import ClaimStatus from '@/constants/ClaimStatus';
import { useMakeResponseToClaimMutation } from '@/redux/api/features/claimApi';
import ClaimResSchema from '@/schemas/claimResSchema';
import TClaim from '@/types/claim';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import LFForm from '../Form/LFForm';
import LFSelect from '../Form/LFSelect';
import LFInput from '../Form/lFInput';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});
const ClaimResponseDialog = ({ item }: { item: TClaim }) => {
	const [resetForm, setResetForm] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const [makeResponseToClaim, { isLoading }] = useMakeResponseToClaimMutation();
	const statusOptions = ClaimStatus.map((status) => ({
		label: status,
		value: status
	}));

	const handleClose = () => {
		setOpen(false);
		setResetForm(true);
	};

	const handleSubmit = async (data: FieldValues) => {
		try {
			const res = await makeResponseToClaim({ id: item.id, data });
			if (res?.data?.success) {
				handleClose();
				toast.success('Response sent successfully');
			} else {
				toast.error('Failed to send response! Try again later.');
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<React.Fragment>
			<Button variant='outlined' onClick={() => setOpen(true)}>
				Take Action
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle>send response to {item?.user?.name} </DialogTitle>
				<DialogContent>
					<LFForm onSubmit={handleSubmit} resolver={zodResolver(ClaimResSchema)} resetForm={resetForm}>
						<LFInput name='response' label='Response' multiline sx={{ mb: 2 }} />
						<LFSelect name='status' label='Status' options={statusOptions} />
						<Button type='submit' fullWidth sx={{ mt: 2 }} disabled={isLoading}>
							{isLoading ? 'Submitting...' : 'Submit'}
						</Button>
					</LFForm>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default ClaimResponseDialog;
