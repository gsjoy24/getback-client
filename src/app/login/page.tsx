'use client';
import loginXsImage from '@/assets/login-xs.jpg';
import loginImage from '@/assets/login.jpg';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import LoginValidationSchema from '@/schemas/loginSchema';
import userLogin from '@/services/actions/userLogin';
import { isLoggedIn, storeUserInfo } from '@/services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const LoginPage = () => {
	const router = useRouter();
	const [redirectTo, setRedirectTo] = useState<string | null>(null);
	const [showPass, setShowPass] = useState<boolean>(false);
	const [resetForm, setResetForm] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const searchParams = new URLSearchParams(window?.location.search);
		const redirect = searchParams.get('redirect');
		setRedirectTo(redirect);
	}, []);

	const handleSubmit = async (data: FieldValues) => {
		try {
			setLoading(true);
			const res = await userLogin(data);
			if (res.success) {
				setResetForm(true);
				toast.success(res.message);
				await storeUserInfo(res?.data?.token);
				router.push(redirectTo || '/');
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
					height: {
						xs: '20px',
						md: 'auto'
					}
				}}
			>
				<Image src={loginImage} width={300} height={700} alt='Login' className='h-full w-full hidden md:block' />
				<Image src={loginXsImage} width={360} height={180} alt='Login' className='h-[220px] w-full md:hidden' />
			</Grid>
			<Grid
				item
				xs={12}
				md={8}
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
					<LFForm onSubmit={handleSubmit} resolver={zodResolver(LoginValidationSchema)} resetForm={resetForm}>
						<LFInput name='email' label='Email' sx={{ mb: 2 }} />
						<div className='w-full relative'>
							<LFInput label='Password' name='password' type={showPass ? 'text' : 'password'} />
							<div className='absolute right-3 top-3 cursor-pointer' onClick={() => setShowPass((prev) => !prev)}>
								{showPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
							</div>
						</div>
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
									<span className='ml-2'>Logging in...</span>
								</>
							) : (
								'Login'
							)}
						</Button>
					</LFForm>
					<Typography sx={{ mt: 2 }}>
						Don&#39;t have an account?{' '}
						<Typography sx={{ color: 'primary.main', cursor: 'pointer' }} component={Link} href='/signup'>
							Sign up
						</Typography>
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
