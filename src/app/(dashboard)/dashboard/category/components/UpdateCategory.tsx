'use client';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import { useUpdateCategoryMutation } from '@/redux/api/features/categoryApi';
import addCategorySchema from '@/schemas/addCategorySchema';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingButton from '@mui/lab/LoadingButton';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { GoPencil } from 'react-icons/go';
import { toast } from 'sonner';
type TProps = {
	id: string;
	name: string;
};

const UpdateCategory = ({ id, name }: TProps) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

	const handleUpdateCategory = async (data: FieldValues) => {
		try {
			const res = await updateCategory({
				id,
				...data
			}).unwrap();
			if (res.success) {
				handleClose();
				toast.success(res.message);
			} else {
				toast.error(res.message ?? 'Something went wrong!');
			}
		} catch (error: any) {
			toast.error(error.message ?? 'Something went wrong!');
		}
	};

	return (
		<>
			<Button onClick={handleClickOpen} variant='text'>
				<GoPencil size={20} />
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='update_category_title'
				sx={{
					width: '100%',
					'.MuiDialog-paper': {
						width: '100%',
						maxWidth: '400px'
					}
				}}
			>
				<DialogTitle id='update_category_title'>Update Category: {name}</DialogTitle>
				<DialogContent>
					<LFForm onSubmit={handleUpdateCategory} resolver={zodResolver(addCategorySchema)} defaultValues={{ name }}>
						<LFInput label='Category Name' name='name' />
						<DialogActions>
							<Button onClick={handleClose} type='button' size='small' variant='outlined'>
								Cancel
							</Button>
							<LoadingButton type='submit' variant='contained' loading={isLoading} size='small' autoFocus>
								Update
							</LoadingButton>
						</DialogActions>
					</LFForm>
				</DialogContent>
			</Dialog>
		</>
	);
};

export default UpdateCategory;
