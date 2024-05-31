'use client';
import loginXsImage from '@/assets/login-xs.jpg';
import loginImage from '@/assets/login.jpg';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import LoginValidationSchema from '@/schemas/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const LoginPage = () => {
	const handleSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<Grid container sx={{ minHeight: '97vh' }}>
			<Grid
				item
				xs={12}
				md={5}
				sx={{
					height: {
						xs: '20px',
						md: 'auto'
					}
				}}
			>
				<Image src={loginImage} width={300} height={700} alt='Login' className='h-full w-auto hidden md:block' />
				<Image src={loginXsImage} width={360} height={180} alt='Login' className='h-[220px] w-full md:hidden' />
			</Grid>
			<Grid
				item
				xs={12}
				md={6}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: {
						xs: '240px',
						md: 'auto'
					}
				}}
			>
				<Box sx={{ m: 1, maxWidth: '400px', textAlign: 'center' }}>
					<Typography
						variant='h1'
						sx={{
							fontSize: '3rem'
						}}
					>
						Welcome Back
					</Typography>
					<Typography sx={{ mb: 5 }}>Login to your account, let&#39;s get started</Typography>

					{/* form */}
					<LFForm onSubmit={handleSubmit} resolver={zodResolver(LoginValidationSchema)}>
						<LFInput name='email' label='Email' sx={{ mb: 2 }} />

						<LFInput name='password' label='Password' type='password' />
						<Button type='submit' fullWidth sx={{ mt: 2 }}>
							Login
						</Button>
					</LFForm>
				</Box>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
