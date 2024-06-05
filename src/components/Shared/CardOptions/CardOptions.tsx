'use client';
import { useToggleMarkAsFoundMutation } from '@/redux/api/features/lostItemApi';
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

const CardOptions = ({ item }: { item: TLostItem }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const [toggleMarkAsFound, { isLoading: isMarking }] = useToggleMarkAsFoundMutation();

	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleMarking = async () => {
		try {
			const res = await toggleMarkAsFound({ id: item.id, status: !item.isFound });
			console.log(res.data);
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
				<MenuItem onClick={handleClose}>
					<span className='flex justify-center items-center gap-2'>
						<DeleteIcon sx={{ fontSize: '16px' }} />
						Delete
					</span>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<span className='flex justify-center items-center gap-2'>
						<EditIcon sx={{ fontSize: '16px' }} />
						Edit
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

export default CardOptions;
