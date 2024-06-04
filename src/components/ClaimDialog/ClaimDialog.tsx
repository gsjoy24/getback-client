'use client';
import TClaim from '@/types/claim';
import { TFoundItem } from '@/types/foundItem';
import { Button, Container, Divider, IconButton, Slide, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import LFDatePicker from '../Form/LFDatePicker';
import LFForm from '../Form/LFForm';
import LFInput from '../Form/lFInput';
import PageTitle from '../Shared/PageTitle';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const ClaimDialog = ({ item }: { item: TFoundItem }) => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Dayjs | null>(null);
	const [dateError, setDateError] = useState<string | null>(null);
	const [imageError, setImageError] = useState<boolean>(false);
	const [imageLinks, setImageLinks] = useState<string[] | null>(null);
	const [resetForm, setResetForm] = useState<boolean>(false);
	const handleClaim = (data: Partial<TClaim>) => {
		console.log(data);
	};

	return (
		<>
			<Button variant='outlined' onClick={() => setOpen(true)} sx={{ mt: 2, width: '150px' }}>
				Claim
			</Button>
			<Dialog fullScreen open={open} onClose={() => setOpen(false)} TransitionComponent={Transition} sx={{}}>
				{/* button to close */}
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

				<Container>
					<PageTitle
						title={`Claim ${item?.itemName}`}
						desc='Enter the required details to verify and retrieve your lost belonging. Follow our simple steps to confirm your claim and get your item back.'
					/>
					<br />
					{/* form to claim */}
					<LFForm onSubmit={handleClaim}>
						<Stack
							justifyContent='center'
							alignItems='center'
							gap={2}
							direction={{
								xs: 'column',
								sm: 'row'
							}}
						>
							<LFInput name='driveUrl' label='Drive URL of all document if you have (Optional)' />
							<LFDatePicker label='Date' setDate={setDate} dateError={dateError} setDateError={setDateError} />
						</Stack>
						<LFInput name='description' label='Detail Info' multiline />
					</LFForm>
				</Container>
			</Dialog>
		</>
	);
};

export default ClaimDialog;
