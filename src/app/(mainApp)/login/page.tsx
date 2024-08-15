'use client';
import loginXsImage from '@/assets/login-xs.jpg';
import loginImage from '@/assets/login.jpg';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import CredentialModal from '@/components/Shared/CredentialModal';
import { setUser } from '@/redux/api/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import LoginValidationSchema from '@/schemas/loginSchema';
import userLogin from '@/services/actions/userLogin';
import { isLoggedIn, storeUserInfo } from '@/services/auth.services';
import verifyToken from '@/utils/verifyToken';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
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
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.auth.user);

	useEffect(() => {
		if (user) {
			router.push('/');
		}
		const searchParams = new URLSearchParams(window?.location.search);
		const redirect = searchParams.get('redirect');
		setRedirectTo(redirect);
	}, [router, user]);

	const handleSubmit = async (data: FieldValues) => {
		try {
			setLoading(true);
			const res = await userLogin(data);
			if (res.success) {
				setResetForm(true);
				toast.success(res.message);
				const userInfo = verifyToken(res?.data?.accessToken);
				dispatch(setUser({ user: userInfo, token: res?.data?.accessToken }));
				storeUserInfo(res?.data?.accessToken);
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
		<Grid
			container
			sx={{
				maxHeight: {
					sm: '800px'
				},
				height: '100%',
				position: 'relative'
			}}
		>
			<div className='pattern absolute top-0 right-0 -z-10'></div>
			<Grid item xs={12} sm={4}>
				<Image src={loginImage} width={300} height={600} alt='Login' className='h-full w-full hidden sm:block' />
				<Image src={loginXsImage} width={360} height={180} alt='Login' className='h-[220px] w-full sm:hidden' />
			</Grid>
			<Grid
				item
				xs={12}
				sm={8}
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Box
					sx={{
						mx: 2,
						maxWidth: '400px',
						textAlign: 'center',
						py: 3
					}}
				>
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
							<IconButton
								sx={{
									position: 'absolute',
									right: 3,
									top: 10
								}}
								onClick={() => setShowPass((prev) => !prev)}
								aria-label='toggle password visibility'
								size='small'
							>
								{showPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
							</IconButton>
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
					<Stack direction='row' gap={1} mt={2} justifyContent='center'>
						<Typography> Don&#39;t have an account?</Typography>
						<Typography sx={{ color: 'primary.main', cursor: 'pointer' }} component={Link} href='/signup'>
							Sign up
						</Typography>
					</Stack>
					<CredentialModal />
				</Box>
			</Grid>
		</Grid>
	);
};

export default LoginPage;
