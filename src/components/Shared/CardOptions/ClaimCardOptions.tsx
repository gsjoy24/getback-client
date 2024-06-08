'use client';
import { useDeleteClaimMutation } from '@/redux/api/features/claimApi';
import TClaim from '@/types/claim';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, IconButton, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import * as React from 'react';
import { toast } from 'sonner';

const ClaimCardOptions = ({ item }: { item: TClaim }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const [deleteClaim, { isLoading: isDeleting }] = useDeleteClaimMutation();

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleDelete = async () => {
		try {
			const res = await deleteClaim(item.id);
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
				<MenuItem>
					<Button
						component={Link}
						href={`/my-profile/claims/edit/${item.id}`}
						className={`${item.status !== 'PENDING' && 'Mui-disabled'}`}
						variant='text'
						sx={{
							p: 0,
							color: 'inherit'
						}}
					>
						<Typography variant='body2' className='flex justify-center gap-2'>
							<EditIcon sx={{ fontSize: '16px' }} />
							Edit
						</Typography>
					</Button>
				</MenuItem>
				<MenuItem onClick={handleDelete} className={`${isDeleting && 'Mui-disabled'}`}>
					<span className='flex justify-center items-center gap-2'>
						<DeleteIcon sx={{ fontSize: '16px' }} />
						{isDeleting ? 'Deleting...' : 'Delete'}
					</span>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default ClaimCardOptions;
