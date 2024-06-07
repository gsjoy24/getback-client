import { Slide } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	desc: string;
	confirmHandler: () => void;
};

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});
const ConfirmModal = ({ open, setOpen, title, desc, confirmHandler }: TProps) => {
	const onConfirm = () => {
		setOpen(false);
		confirmHandler();
	};

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			TransitionComponent={Transition}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>{desc}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setOpen(false)}>Cancel</Button>
				<Button onClick={onConfirm} autoFocus>
					Confirm
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ConfirmModal;
