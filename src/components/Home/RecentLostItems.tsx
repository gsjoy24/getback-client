import config from '@/lib/config';
import { Container, Stack, Typography } from '@mui/material';
import LostItemCard from '../Shared/LostItemCard/LostItemCard';

const RecentLostItems = async () => {
	const fetchItems = await fetch(`${config.serverURL}/lost-items?limit=6`, {
		next: {
			revalidate: 30
		}
	});
	const items = await fetchItems.json();

	return (
		<Container>
			<Stack
				justifyContent='center'
				gap={2}
				sx={{
					textAlign: 'center',
					pb: 4,
					px: 1
				}}
			>
				<Typography variant='h4'>Recent Lost Items</Typography>
				<Typography variant='body2'>
					Dive into a collection of recently lost items awaiting reconnection with their owners.
				</Typography>
			</Stack>
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
				{items && items.data?.map((item: any) => <LostItemCard key={item.id} item={item} />)}
			</Stack>
		</Container>
	);
};

export default RecentLostItems;
