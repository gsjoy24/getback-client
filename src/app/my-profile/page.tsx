'use client';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import EmptyCard from '@/components/Shared/EmptyCard/EmptyCard';
import FoundItemCard from '@/components/Shared/FoundItemCard/FoundItemCard';
import LostItemCard from '@/components/Shared/LostItemCard/LostItemCard';
import SectionTitle from '@/components/Shared/SectionTitle';
import { useGetProfileQuery } from '@/redux/api/features/profileApi';
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
import LoadingCompo from '../loading';

const MyProfile = () => {
	const { data, isFetching } = useGetProfileQuery(null);

	if (isFetching) {
		return <LoadingCompo />;
	} else if (!data?.data) {
		return <EmptyCard />;
	}

	const { user, bio, image, age, createdAt, lostItems, foundItems, counts } = data?.data;
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
								<Box display='flex' alignItems='center' justifyContent='center'>
									<AlternateEmailIcon sx={{ fontSize: '12px' }} />
									{username}
								</Box>
							</Typography>
							<Typography variant='body1' gutterBottom align='center'>
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
								<Typography>{DateToString(createdAt)}</Typography>
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
						</div>
					</Grid>

					{/* side */}

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
						{/* /* lost items */}
						{lostItems?.length && (
							<>
								<SectionTitle title='Lost Items' />
								<Stack justifyContent='center' alignItems='center' flexWrap='wrap' direction='row' gap={3}>
									{lostItems?.map((item: TLostItem) => (
										<LostItemCard key={item.id} item={item} />
									))}
								</Stack>
								<div className='text-center mb-8'>
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
						{foundItems?.length && (
							<>
								<SectionTitle title='Found Items' />
								<Stack justifyContent='center' alignItems='center' flexWrap='wrap' direction='row' gap={3}>
									{foundItems?.map((item: TFoundItem) => (
										<FoundItemCard key={item.id} item={item} />
									))}
								</Stack>
								<div className='text-center'>
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
					</Grid>
				</Grid>
			</Container>
		</PrivateRoute>
	);
};

export default MyProfile;
