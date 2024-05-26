import config from '@/lib/config';
import { Container, Stack } from '@mui/material';
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
				alignItems='center'
				gap={2}
				flexWrap='wrap'
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
