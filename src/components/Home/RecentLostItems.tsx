import config from '@/lib/config';
import { TLostItem } from '@/types/lostItem';
import { Box, Button, Container, Skeleton, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import LostItemCard from '../Shared/LostItemCard/LostItemCard';
import SectionTitle from '../Shared/SectionTitle';

const RecentLostItems = async () => {
	const fetchItems = await fetch(`${config.serverURL}/lost-items?limit=6`, {
		next: {
			revalidate: 30
		}
	});
	const { data: items } = await fetchItems.json();
	return (
		<Container
			sx={{
				mb: 5
			}}
		>
			<SectionTitle
				title='Recent Lost Items'
				desc='Dive into a collection of recently lost items awaiting reconnection with their owners.'
			/>
			<Stack
				justifyContent='center'
				alignItems='center'
				gap={5}
				flexWrap='wrap'
				pb={5}
				sx={{
					flexDirection: {
						xs: 'column',
						sm: 'row'
					}
				}}
			>
				{items
					? items.map((item: TLostItem) => <LostItemCard key={item.id} item={item} />)
					: Array.from({ length: 3 }).map((_, index) => (
							<Box key={index}>
								<Skeleton animation='wave' variant='rectangular' width={330} height={118} />
								<Skeleton animation='wave' width={230} height={40} />
								<Skeleton animation='wave' width={230} height={20} />
								<Skeleton animation='wave' width={200} height={20} />
								<Skeleton animation='wave' width={230} height={40} />
							</Box>
					  ))}
			</Stack>
			<div className='grid w-full place-items-center'>
				<Button variant='outlined' component={Link} href='/lost-items' size='large'>
					View More
				</Button>
			</div>
		</Container>
	);
};

export default RecentLostItems;
