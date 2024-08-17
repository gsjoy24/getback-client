'use client';
import { useDeleteCategoryMutation } from '@/redux/api/features/categoryApi';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { toast } from 'sonner';

const DeleteCategoryButton = ({ id }: { id: string }) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

	const handleDelete = async () => {
		handleClose();
		try {
			const res = await deleteCategory(id).unwrap();
			if (res.success) {
				toast.success(res.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<LoadingButton
				disabled={isLoading}
				onClick={handleClickOpen}
				variant='text'
				loading={isLoading}
				color='error'
				sx={{
					'&:hover': {
						backgroundColor: 'rgba(255,0,0,0.1)'
					}
				}}
			>
				<MdOutlineDeleteOutline size={20} />
			</LoadingButton>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>Are you sure you want to delete this category?</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						Once you delete this category, it cannot be recovered.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} size='small' variant='outlined'>
						Cancel
					</Button>
					<Button onClick={handleDelete} size='small' autoFocus>
						Delete
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DeleteCategoryButton;
