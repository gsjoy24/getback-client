import team from '@/assets/team.jpg';
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<Box>
			<Image src={team} alt='About Us' width={700} height={500} className='w-full h-[20vh] lg:h-[50vh] object-cover' />
			<Container maxWidth='md' sx={{ py: 6 }}>
				<Typography
					variant='h2'
					gutterBottom
					align='center'
					sx={{
						fontSize: {
							xs: '3rem',
							sm: '3.5rem'
						}
					}}
				>
					Our Journey
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Nestled in the heart of our bustling city, Lost & Found emerged from a simple yet profound notion - to
					transform moments of loss into stories of reunion and hope. It all started with a single act of kindness: a
					lost necklace returned to its owner by a stranger in a nearby park. This touching encounter sparked a vision -
					a vision of a community where lost items were not just found, but where they became symbols of connection and
					resilience.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					From this humble beginning, Lost & Found blossomed into a vibrant hub of compassion and solidarity. What began
					as a modest website soon flourished into a thriving community, where individuals from diverse backgrounds
					converged to share their tales of lost treasures and serendipitous reunions.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Every item shared on Lost & Found carried with it a narrative - a testament to the human spirit&#39;s capacity
					for resilience and empathy. From misplaced keys to sentimental heirlooms, each story spoke to the enduring
					belief that what is lost can always be found again, given the right circumstances and a helping hand.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					As our community grew, so did our impact. Lost & Found&#39;s message of hope and camaraderie rippled across
					our city and beyond, weaving a tapestry of shared experiences and collective goodwill. Today, Lost & Found
					stands as a beacon of light in a world often overshadowed by uncertainty, offering solace and reassurance to
					all who pass through our virtual doors.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}>
					Our journey is one of transformation, of turning moments of loss into opportunities for connection and growth.
					With each reunion, we reaffirm our commitment to spreading kindness and fostering a sense of belonging. Join
					us as we continue this remarkable journey, one lost item at a time.
				</Typography>
				<Typography variant='body1' component='p' sx={{ mb: 2 }}></Typography>
			</Container>
		</Box>
	);
};

export default AboutPage;
