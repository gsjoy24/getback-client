import config from '@/lib/config';
import { TLostItem } from '@/types/lostItem';
import { Box, Button, Container, Skeleton, Stack } from '@mui/material';
import Link from 'next/link';
import FoundItemCard from '../Shared/FoundItemCard/FoundItemCard';
import SectionTitle from '../Shared/SectionTitle';

const RecentFoundItems = async () => {
	const fetchItems = await fetch(`${config.serverURL}/found-items?limit=6`, {
		next: {
			revalidate: 30
		}
	});
	const { data: items } = await fetchItems.json();
	return (
		items?.length && (
			<div className='bg-[#f9f9f9]'>
				<Container
					sx={{
						py: 5
					}}
				>
					<SectionTitle
						title='Recent Found Items'
						desc='Our collection of recently found items waiting to be reunited with their owners. Check them out!'
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
							? items.map((item: TLostItem) => <FoundItemCard key={item?.id} item={item} />)
							: Array.from({ length: 3 }).map((_, index) => (
									<Box key={index * 2}>
										<Skeleton animation='wave' variant='rectangular' width={330} height={118} />
										<Skeleton animation='wave' width={230} height={40} />
										<Skeleton animation='wave' width={230} height={20} />
										<Skeleton animation='wave' width={200} height={20} />
										<Skeleton animation='wave' width={230} height={40} />
									</Box>
							  ))}
					</Stack>
					<div className='grid w-full place-items-center'>
						<Button variant='outlined' component={Link} href='/found-items' size='large'>
							View More
						</Button>
					</div>
				</Container>
			</div>
		)
	);
};

export default RecentFoundItems;
