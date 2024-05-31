'use client';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const StayUpdated = () => {
	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(e.target?.email.value);
	};
	return (
		<Stack
			justifyContent='center'
			alignItems='center'
			gap={4}
			sx={{
				bgcolor: '#f5f5f5',
				py: 5,
				px: 2,
				flexDirection: {
					xs: 'column',
					sm: 'row'
				}
			}}
		>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant='h4' component='h2' gutterBottom>
					Stay Updated
				</Typography>
				<Typography variant='body2' component='p' gutterBottom>
					Subscribe to our newsletter to receive the latest news!
				</Typography>
			</Box>
			<Box component='form' onSubmit={handleSubmit}>
				<TextField variant='outlined' fullWidth label='Enter your email' type='email' name='email' sx={{ mb: 2 }} />
				<Button fullWidth type='submit'>
					Subscribe
				</Button>
			</Box>
		</Stack>
	);
};

export default StayUpdated;
