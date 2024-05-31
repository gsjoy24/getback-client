import contact from '@/assets/contact.jpg';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import Image from 'next/image';

const ContactPage = () => {
	return (
		<Container maxWidth='md' sx={{ py: 8 }}>
			<Typography variant='h2' gutterBottom align='center'>
				Contact Us
			</Typography>
			<Grid
				container
				spacing={4}
				sx={{
					maxHeight: {
						xs: 'auto',
						sm: '500px'
					}
				}}
			>
				{/* Picture */}
				<Grid item xs={12} md={6}>
					<Image src={contact} width={500} height={300} alt='Contact' className='h-[500px] w-full object-cover' />
				</Grid>
				{/* Contact Form */}
				<Grid item xs={12} md={6}>
					<Paper elevation={3} sx={{ p: 4 }}>
						<Typography variant='h5' component='h3' gutterBottom>
							Get in Touch
						</Typography>
						<form>
							<TextField variant='outlined' fullWidth label='Your Name' margin='normal' />
							<TextField variant='outlined' fullWidth label='Your Email' margin='normal' />
							<TextField variant='outlined' fullWidth label='Message' multiline rows={6} margin='normal' />
							<Button variant='contained' color='primary' fullWidth>
								Send Message
							</Button>
						</form>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactPage;
