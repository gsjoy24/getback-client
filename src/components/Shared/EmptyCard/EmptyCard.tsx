import emptyImg from '@/assets/empty.png';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const EmptyCard = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
				py: 5
			}}
		>
			<Image src={emptyImg} height={250} width={250} alt='No items found' />
			<Typography variant='h4' className='text-center'>
				No Data Found!
			</Typography>
		</Box>
	);
};

export default EmptyCard;
