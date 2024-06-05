'use client';
import TClaim from '@/types/claim';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import LFForm from '../Form/LFForm';
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
	console.log(item);
	const [open, setOpen] = React.useState(false);
	const handleSubmit = (data: FieldValues) => {
		console.log(data);
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
				onClose={() => setOpen(false)}
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogContent>
					<LFForm onSubmit={handleSubmit}>
						<LFInput name='response' label='Response' multiline />
					</LFForm>
				</DialogContent>
			</Dialog>
		</React.Fragment>
	);
};

export default ClaimResponseDialog;
