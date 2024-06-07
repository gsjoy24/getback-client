'use client';
import LoadingCompo from '@/app/loading';
import { useCreateClaimMutation } from '@/redux/api/features/claimApi';
import claimItemSchema from '@/schemas/claimItemSchema';
import { isLoggedIn } from '@/services/auth.services';
import TClaim from '@/types/claim';
import { TFoundItem } from '@/types/foundItem';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Container, Divider, IconButton, Slide, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { TransitionProps } from '@mui/material/transitions';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { use, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { toast } from 'sonner';
import LFDatePicker from '../Form/LFDatePicker';
import LFForm from '../Form/LFForm';
import LFInput from '../Form/lFInput';
import MultiImageUploader from '../Shared/MultiImageUploader/MultiImageUploader';
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
	const currentURL = usePathname();
	const isUserLoggedIn = isLoggedIn();
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Dayjs | null>(null);
	const [dateError, setDateError] = useState<string | null>(null);
	const [imageError, setImageError] = useState<boolean>(false);
	const [imageLinks, setImageLinks] = useState<string[] | null>(null);
	const [resetForm, setResetForm] = useState<boolean>(false);

	const [createClaim, { isLoading }] = useCreateClaimMutation();

	const handleClaim = async (data: Partial<TClaim>) => {
		setDateError(null);
		setImageError(false);

		if (!date) {
			setDateError('Please select a date');
			return;
		}

		if (!imageLinks?.length) {
			setImageError(true);
			return;
		}

		data.lostDate = date.toISOString();
		data.pictures = imageLinks;
		data.foundItemId = item?.id;

		try {
			const res = await createClaim(data);
			if (res?.data?.success) {
				toast.success(res?.data?.message);
			} else {
				toast.error(res?.data?.message);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setOpen(false);
			setResetForm(true);
			setImageLinks(null);
		}
	};

	return (
		<>
			{isUserLoggedIn ? (
				<Button onClick={() => setOpen(true)} sx={{ width: '180px', mt: 2 }}>
					Claim
				</Button>
			) : (
				<Button component={Link} href={`/login?redirect=${currentURL}`} sx={{ width: '180px', mt: 2 }}>
					Login to Claim
				</Button>
			)}
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

				{item && item?.id ? (
					<Container sx={{ py: 3 }}>
						<PageTitle
							title={`Claim ${item?.itemName}`}
							desc='Enter the required details to verify and retrieve your lost belonging. Follow our simple steps to confirm your claim and get your item back.'
						/>
						<br />
						{/* form to claim */}
						<LFForm onSubmit={handleClaim} resolver={zodResolver(claimItemSchema)} resetForm={resetForm}>
							<Stack
								justifyContent='center'
								alignItems='center'
								gap={2}
								direction={{
									xs: 'column',
									sm: 'row'
								}}
								mb={3}
							>
								<LFInput name='driveUrl' label='Drive URL of all documents if you have (Optional)' />
								<LFDatePicker label='Date' setDate={setDate} dateError={dateError} setDateError={setDateError} />
							</Stack>
							<Stack
								gap={2}
								sx={{
									width: '100%',
									flexDirection: {
										xs: 'column',
										sm: 'row'
									},
									mb: 3
								}}
							>
								<LFInput label='Description' name='description' multiline rows={5} />
								<MultiImageUploader
									setImageLinks={setImageLinks}
									imageError={imageError}
									setImageError={setImageError}
								/>
							</Stack>

							{/* uploaded images will be here */}
							{imageLinks && (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										flexWrap: 'wrap',
										gap: 2,
										width: '100%',
										mb: 3
									}}
								>
									{imageLinks.map((link, index) => (
										<Image
											key={index}
											src={link}
											width={100}
											height={100}
											alt='lost item'
											style={{ maxWidth: '150px', width: '100%', height: 'auto' }}
										/>
									))}
								</Box>
							)}

							<Button type='submit' sx={{ width: '100%', mt: 2 }} disabled={isLoading}>
								{isLoading ? 'Claiming...' : 'Claim'}
							</Button>
						</LFForm>
					</Container>
				) : (
					<LoadingCompo />
				)}
			</Dialog>
		</>
	);
};

export default ClaimDialog;
