'use client';
import DeleteAccountSchema from '@/schemas/deleteAccountSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Slide, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LFForm from '../Form/LFForm';
import LFInput from '../Form/lFInput';

type TProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const DeleteAccountModal = ({ open, setOpen }: TProps) => {
	const [showPass, setShowPass] = React.useState<boolean>(false);
	const onConfirm = (data: FieldValues) => {
		console.log(data);
	};

	return (
		<Dialog
			open={open}
			onClose={() => setOpen(false)}
			TransitionComponent={Transition}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>Are you sure you want to delete your account?</DialogTitle>
			<DialogContent>
				<LFForm onSubmit={onConfirm} resolver={zodResolver(DeleteAccountSchema)}>
					<Typography variant='body2' color='textSecondary'>
						Please enter your password
					</Typography>

					<div className='w-full relative'>
						<LFInput label='Password' name='password' type={showPass ? 'text' : 'password'} />
						<div className='absolute right-3 top-3 cursor-pointer' onClick={() => setShowPass((prev) => !prev)}>
							{showPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
						</div>
					</div>

					<Typography variant='body2' color='textSecondary'>
						Write <strong className='select-none'>BYE GETBACK</strong> to confirm
					</Typography>
					<LFInput name='write' label='Write' />
					<DialogActions>
						<Button onClick={() => setOpen(false)} type='button'>
							Cancel
						</Button>
						<Button type='submit'>Confirm</Button>
					</DialogActions>
				</LFForm>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteAccountModal;
