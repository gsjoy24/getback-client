'use client';

import { useDeleteFoundItemMutation, useToggleReturnStatusMutation } from '@/redux/api/features/foundItemApi';
import { TFoundItem } from '@/types/foundItem';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, IconButton, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import * as React from 'react';
import { toast } from 'sonner';

const FoundCardOptions = ({ item }: { item: TFoundItem }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const [toggleReturnStatus, { isLoading }] = useToggleReturnStatusMutation();
	const [deleteFoundItem, { isLoading: isDeleting }] = useDeleteFoundItemMutation();

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleReturnStatus = async () => {
		try {
			const res = await toggleReturnStatus({ id: item.id, status: !item?.isReturned });
			if (res.data.success) {
				toast.success(`Item marked as ${!item?.isReturned ? 'returned' : 'found'}`);
				setAnchorEl(null);
			}
		} catch (error) {}
	};

	const handleDelete = async () => {
		try {
			const res = await deleteFoundItem(item.id);
			if (res.data.success) {
				toast.success('Item deleted successfully');
				setAnchorEl(null);
			}
		} catch (error) {}
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

				<MenuItem component={Link} href={`/my-profile/found-items/edit/${item.id}`}>
					<Typography variant='body2' className='flex justify-center gap-2'>
						<EditIcon sx={{ fontSize: '16px' }} />
						Edit
					</Typography>
				</MenuItem>

				<MenuItem onClick={handleReturnStatus} className={`${isLoading && 'Mui-disabled'}`}>
					{item?.isReturned ? (
						<span className='flex justify-center items-center gap-2'>
							<CloseIcon sx={{ fontSize: '16px' }} />
							{isLoading ? 'Loading...' : 'Mark as Found'}
						</span>
					) : (
						<span className='flex justify-center items-center gap-2'>
							<CheckIcon sx={{ fontSize: '16px' }} />
							{isLoading ? 'Loading...' : 'Mark as Returned'}
						</span>
					)}
				</MenuItem>
			</Menu>
		</div>
	);
};

export default FoundCardOptions;
