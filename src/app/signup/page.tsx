'use client';
import loginXsImage from '@/assets/login-xs.jpg';
import signImage from '@/assets/signup.jpg';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import LoginValidationSchema from '@/schemas/loginSchema';
import signupUser from '@/services/actions/signup';
import userLogin from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const SignPage = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [showPass, setShowPass] = useState<boolean>(false);
	const router = useRouter();

	const handleSubmit = async (data: FieldValues) => {
		const modifiedData = {
			...data,
			profile: {
				...data.profile,
				age: parseInt(data.profile.age)
			}
		};
		try {
			setLoading(true);
			const res = await signupUser(modifiedData);

			if (res.success) {
				toast.success(res.message);
				const loginRes = await userLogin({ email: data.email, password: data.password });
				if (loginRes.success) {
					storeUserInfo(loginRes?.data?.token);
					router.push('/');
				} else {
					toast.error(loginRes.message);
				}
			} else {
				toast.error(res.message);
			}
		} catch (error: any) {
			toast.error(error?.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Grid container sx={{ minHeight: '97vh', position: 'relative' }}>
			<div className='pattern absolute top-0 right-0 -z-10'></div>
			<Grid
				item
				xs={12}
				md={4}
				sx={{
					display: {
						xs: 'none',
						sm: 'block'
					}
				}}
			>
				<Image src={signImage} width={300} height={700} alt='Login' className='h-full w-full hidden md:block' />
			</Grid>

			{/* form side */}
			<Grid
				item
				xs={12}
				md={8}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Box sx={{ m: 1, maxWidth: '700px', width: '100%', textAlign: 'center' }}>
					<Typography
						variant='h1'
						sx={{
							fontSize: '3rem'
						}}
					>
						Join the Community
					</Typography>
					<Typography sx={{ mb: 5 }}>Find what you&#39;ve lost, help others find what they&#39;ve lost.</Typography>

					{/* form */}
					<LFForm onSubmit={handleSubmit}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: 2
							}}
						>
							<Stack
								gap={2}
								sx={{
									width: '100%',
									flexDirection: {
										xs: 'column',
										sm: 'row'
									}
								}}
							>
								<LFInput label='Full Name' name='name' />
								<LFInput label='User Name' name='username' />
							</Stack>
							<Stack
								gap={2}
								sx={{
									width: '100%',
									flexDirection: {
										xs: 'column',
										sm: 'row'
									}
								}}
							>
								<LFInput label='Email' name='email' type='email' />
								<div className='w-full relative'>
									<LFInput label='Password' name='password' type={showPass ? 'text' : 'password'} />
									<div className='absolute right-3 top-3 cursor-pointer' onClick={() => setShowPass((prev) => !prev)}>
										{showPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
									</div>
								</div>
							</Stack>

							<Stack
								gap={2}
								sx={{
									width: '100%',
									flexDirection: {
										xs: 'column',
										sm: 'row'
									}
								}}
							>
								<LFInput label='Phone Number' name='phone' />
								<LFInput label='Age' name='profile.age' type='number' />
							</Stack>

							<LFInput label='Image' name='profile.image' />
							<LFInput label='Bio' name='profile.bio' multiline={true} />
						</Box>

						<Button type='submit' fullWidth sx={{ mt: 2 }} disabled={loading}>
							{loading ? (
								<>
									<svg
										className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
									<span className='ml-2'>Signing Up</span>
								</>
							) : (
								'Sign Up'
							)}
						</Button>
					</LFForm>
					<Typography sx={{ mt: 2 }}>
						Already have an account?{' '}
						<Typography sx={{ color: 'primary.main', cursor: 'pointer' }} component={Link} href='/login'>
							Login
						</Typography>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default SignPage;
