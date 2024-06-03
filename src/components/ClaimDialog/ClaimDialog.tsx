'use client';
import { Button, IconButton, Slide } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const ClaimDialog = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button variant='outlined' onClick={() => setOpen(true)} sx={{ mt: 2, width: '150px' }}>
				Claim
			</Button>
			<Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition} sx={{}}>
				hiiiiii
				<IconButton
					onClick={() => setOpen(false)}
					sx={{
						position: 'absolute',
						top: '10px',
						right: '12px'
					}}
				>
					<MdOutlineClose size={25} />
				</IconButton>
			</Dialog>
		</>
	);
};

export default ClaimDialog;
