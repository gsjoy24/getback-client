'use client';
import DeleteAccountModal from '@/components/DeleteAccountModal/DeleteAccountModal';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import MyClaimCard from '@/components/Shared/ClaimCard/MyClaimCard';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import FoundItemCard from '@/components/Shared/FoundItemCard/FoundItemCard';
import LostItemCard from '@/components/Shared/LostItemCard/LostItemCard';
import SectionTitle from '@/components/Shared/SectionTitle';
import { useGetProfileQuery } from '@/redux/api/features/profileApi';
import TClaim from '@/types/claim';
import { TFoundItem } from '@/types/foundItem';
import { TLostItem } from '@/types/lostItem';
import DateToString from '@/utils/DateToString';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import UpdateIcon from '@mui/icons-material/Update';
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LoadingCompo from '../loading';

const MyProfile = () => {
	const [openDeleteAccountModal, setOpenDeleteAccountModal] = useState<boolean>(false);
	const { data, isFetching } = useGetProfileQuery(null);

	if (isFetching) {
		return <LoadingCompo />;
	} else if (!data?.data) {
		return <EmptyCard />;
	}

	const { user, bio, image, age, createdAt, lostItems, foundItems, claimedItems, counts } = data?.data;
	const { name, email, phone, username } = user;
	return (
		<PrivateRoute>
			<Container>
				<Grid
					container
					sx={{
						py: {
							xs: 2,
							md: 4
						}
					}}
				>
					<Grid
						item
						xs={12}
						md={3}
						sx={{
							p: {
								md: 1
							},
							maxHeight: {
								md: 'calc(100vh - 60px)'
							},
							overflow: {
								md: 'auto'
							},
							position: {
								md: 'sticky'
							},
							top: {
								md: 60
							}
						}}
					>
						<div className='static md:sticky top-[60px]'>
							<Image
								src={image}
								width={200}
								height={200}
								alt={user}
								className='border-[6px] rounded-full border-[#1586FD] mb-2 mx-auto'
							/>
							{/*name , username and bio in center  */}
							<Typography variant='h4' align='center'>
								{name}
							</Typography>
							<Typography variant='body2' gutterBottom align='center' fontSize={14}>
								<AlternateEmailIcon sx={{ fontSize: '12px' }} />
								{username}
							</Typography>
							<Typography variant='body2' gutterBottom align='center'>
								{bio}
							</Typography>
							<Divider
								sx={{
									my: 2
								}}
							/>
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{
									my: 1
								}}
							>
								<EmailIcon sx={{ mr: 1 }} />
								<Typography>{email}</Typography>
							</Box>
							<Divider
								sx={{
									my: 2
								}}
							/>
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{
									my: 1
								}}
							>
								<LocalPhoneIcon sx={{ mr: 1 }} />
								<Typography>{phone}</Typography>
							</Box>
							<Divider
								sx={{
									my: 2
								}}
							/>
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{
									my: 1
								}}
							>
								<PersonIcon sx={{ mr: 1 }} />
								<Typography>{age} years</Typography>
							</Box>
							<Divider
								sx={{
									my: 2
								}}
							/>
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{
									my: 1
								}}
							>
								<UpdateIcon sx={{ mr: 1 }} />
								<Typography variant='body2'>{DateToString(createdAt)}</Typography>
							</Box>
							<Divider
								sx={{
									my: 2
								}}
							>
								<span className='text-[10px]'>Counts</span>
							</Divider>
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{
									my: 1
								}}
							>
								<Typography>Lost Items</Typography>
								<Typography>{counts?.lostItems}</Typography>
							</Box>
							<Divider />
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{
									my: 1
								}}
							>
								<Typography>Found Items</Typography>
								<Typography>{counts?.foundItems}</Typography>
							</Box>
							<Divider />
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{
									my: 1
								}}
							>
								<Typography>Claimed Items</Typography>
								<Typography>{counts?.claimedItems}</Typography>
							</Box>
							<Divider sx={{ my: 2 }} />
							{/* edit profile, change password and delete account option */}
							<Stack spacing={2}>
								<Button component={Link} href='/my-profile/edit' variant='outlined' disabled>
									Edit Profile
								</Button>
								<Button component={Link} href='/my-profile/change-password' variant='outlined'>
									Change Password
								</Button>
								<Button onClick={() => setOpenDeleteAccountModal(true)} variant='outlined'>
									Delete Account
								</Button>
							</Stack>

							<DeleteAccountModal open={openDeleteAccountModal} setOpen={setOpenDeleteAccountModal} />
						</div>
					</Grid>

					{/* items side */}

					<Grid
						item
						xs={12}
						md={9}
						sx={{
							borderLeft: {
								md: '1px solid #e0e0e0'
							},
							p: {
								md: 1
							},
							py: {
								xs: 4
							}
						}}
					>
						{
							// if there is no lost items, found items and claimed items, show empty card, else show the items
							!lostItems.length && !foundItems.length && !claimedItems.length ? (
								<EmptyCard />
							) : (
								<>
									{lostItems?.length > 0 && (
										<>
											<SectionTitle title='Lost Items' />
											<Stack justifyContent='center' alignItems='center' flexWrap='wrap' direction='row' gap={3}>
												{lostItems?.map((item: TLostItem) => (
													<LostItemCard key={item.id} item={item} />
												))}
											</Stack>
											<div className='text-center mb-14'>
												<Button
													component={Link}
													href={'/my-profile/lost-items'}
													sx={{
														mt: 2
													}}
												>
													See All
												</Button>
											</div>
										</>
									)}

									{/* found items */}
									{foundItems?.length > 0 && (
										<>
											<SectionTitle title='Found Items' />
											<Stack justifyContent='center' alignItems='center' flexWrap='wrap' direction='row' gap={3}>
												{foundItems?.map((item: TFoundItem) => (
													<FoundItemCard key={item.id} item={item} />
												))}
											</Stack>
											<div className='text-center mb-14'>
												<Button
													component={Link}
													href={'/my-profile/found-items'}
													sx={{
														mt: 2
													}}
												>
													See All
												</Button>
											</div>
										</>
									)}

									{/* claimed items */}
									{claimedItems?.length > 0 && (
										<>
											<SectionTitle title='Claimed Items' />
											<Stack justifyContent='center' alignItems='center' flexWrap='wrap' direction='row' gap={3}>
												{claimedItems?.map((item: TClaim) => (
													<MyClaimCard key={item.id} item={item} />
												))}
											</Stack>
											<div className='text-center'>
												<Button
													component={Link}
													href={'/my-profile/claims'}
													sx={{
														mt: 2
													}}
												>
													See All
												</Button>
											</div>
										</>
									)}
								</>
							)
						}
					</Grid>
				</Grid>
			</Container>
		</PrivateRoute>
	);
};

export default MyProfile;
