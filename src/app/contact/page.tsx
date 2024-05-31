import contact from '@/assets/contact.jpg';
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Contact Us - Lost & Found',
	description:
		'Have a question or feedback? Get in touch with us! Fill out the form below and we will get back to you as soon as possible. We are here to help you!'
};

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
