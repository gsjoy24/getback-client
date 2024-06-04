'use client';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

const CardOptions = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
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
			</Menu>
		</div>
	);
};

export default CardOptions;
