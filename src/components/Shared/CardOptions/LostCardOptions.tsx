'use client';
import { useDeleteLostItemMutation, useToggleMarkAsFoundMutation } from '@/redux/api/features/lostItemApi';
import { TLostItem } from '@/types/lostItem';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { toast } from 'sonner';

const LostCardOptions = ({ item }: { item: TLostItem }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const [toggleMarkAsFound, { isLoading: isMarking }] = useToggleMarkAsFoundMutation();
	const [deleteLostItem, { isLoading: isDeleting }] = useDeleteLostItemMutation();

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleMarking = async () => {
		try {
			const res = await toggleMarkAsFound({ id: item.id, status: !item.isFound });
			if (res.data.success) {
				toast.success(`Item marked as ${!item.isFound ? 'found' : 'not found'}`);
				setAnchorEl(null);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const handleDelete = async () => {
		try {
			const res = await deleteLostItem(item.id);
			if (res.data.success) {
				toast.success('Item deleted successfully');
				setAnchorEl(null);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='absolute top-2 right-2'>
			<IconButton
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				<MenuItem onClick={handleDelete} className={`${isDeleting && 'Mui-disabled'}`}>
					<span className='flex justify-center items-center gap-2'>
						<DeleteIcon sx={{ fontSize: '16px' }} />
						{isDeleting ? 'Deleting...' : 'Delete'}
					</span>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<span className='flex justify-center items-center gap-2'>
						<EditIcon sx={{ fontSize: '16px' }} />
						Edit [Coming soon]
					</span>
				</MenuItem>
				<MenuItem onClick={handleMarking} className={`${isMarking && 'Mui-disabled'}`}>
					{item.isFound ? (
						<span className='flex justify-center items-center gap-2'>
							<CloseIcon sx={{ fontSize: '16px' }} />
							{isMarking ? 'Marking...' : 'Mark as lost'}
						</span>
					) : (
						<span className='flex justify-center items-center gap-2'>
							<CheckIcon sx={{ fontSize: '16px' }} />
							{isMarking ? 'Marking...' : 'Mark as found'}
						</span>
					)}
				</MenuItem>
			</Menu>
		</div>
	);
};

export default LostCardOptions;
