import reunion from '@/assets/reunions.jpg';
import { Box, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';

const Reunion = () => {
	return (
		<Container>
			<Stack
				sx={{
					pt: 4,
					pb: 10,
					flexDirection: { xs: 'column', md: 'row' },
					gap: 4
				}}
				justifyContent='center'
				alignItems='center'
			>
				{/* image */}
				<Box>
					<Image src={reunion} alt='Last reunion' className='rounded-lg shadow-md border-4' width={500} height={250} />
				</Box>
				{/* text */}
				<Box sx={{ maxWidth: '550px', p: 2 }}>
					<Typography
						variant='h4'
						sx={{
							fontWeight: '700',
							mb: 2,
							fontSize: {
								xs: '1.65rem',
								sm: '2.25rem'
							}
						}}
					>
						Our Last Reunion Event
					</Typography>
					<Typography variant='body2'>
						Our last reunion event took place on May 15, 2024, at Central Park, New York City, celebrating the
						heartwarming reunions of lost items with their owners. Attendees shared their stories of finding and
						returning lost belongings, fostering a sense of community and goodwill. The event featured live music,
						refreshments, and a showcase of the most memorable reunions. Join us at our next event to be part of these
						touching moments!
					</Typography>
				</Box>
			</Stack>
		</Container>
	);
};

export default Reunion;
