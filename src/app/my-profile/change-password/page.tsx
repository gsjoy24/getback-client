'use client';
import LFForm from '@/components/Form/LFForm';
import LFInput from '@/components/Form/lFInput';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';
import PageTitle from '@/components/Shared/PageTitle';
import { useChangePasswordMutation } from '@/redux/api/features/authApi';
import ChangePasswordValidationSchema from '@/schemas/changePasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Container } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'sonner';

const ChangePassword = () => {
	const router = useRouter();
	const [showCurrentPass, setShowCurrentPass] = useState<boolean>(false);
	const [showNewPass, setShowNewPass] = useState<boolean>(false);
	const [showConfirmPass, setShowConfirmPass] = useState<boolean>(false);
	const [resetForm, setResetForm] = useState<boolean>(false);
	const [changePassword, { isLoading }] = useChangePasswordMutation();

	const handleSubmit = async (data: any) => {
		const modifiedData = {
			oldPassword: data?.oldPassword,
			newPassword: data?.newPassword
		};

		try {
			const res = await changePassword(modifiedData);
			if (res?.data?.success) {
				setResetForm(true);
				toast.success(res?.data?.message);
				router.push('/my-profile');
			} else {
				toast.error(res?.data?.message);
			}
		} catch (error) {}
	};

	return (
		<PrivateRoute>
			<Container
				sx={{
					minHeight: 'calc(100vh - 100px)',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					py: '60px',
					width: '100%'
				}}
			>
				<PageTitle
					title='Change Password'
					desc='Change your current password with a strong one and do not share it with others!'
				/>
				<div className='w-full max-w-[400px] mt-4'>
					<LFForm onSubmit={handleSubmit} resolver={zodResolver(ChangePasswordValidationSchema)} resetForm={resetForm}>
						<div className='w-full relative'>
							<LFInput label='Current Password' name='oldPassword' type={showCurrentPass ? 'text' : 'password'} />
							<div
								className='absolute right-3 top-3 cursor-pointer'
								onClick={() => setShowCurrentPass((prev) => !prev)}
							>
								{showCurrentPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
							</div>
						</div>
						<div className='w-full relative'>
							<LFInput label='New Password' name='newPassword' type={showNewPass ? 'text' : 'password'} />
							<div className='absolute right-3 top-3 cursor-pointer' onClick={() => setShowNewPass((prev) => !prev)}>
								{showNewPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
							</div>
						</div>
						<div className='w-full relative'>
							<LFInput label='Confirm Password' name='confirm_password' type={showConfirmPass ? 'text' : 'password'} />
							<div
								className='absolute right-3 top-3 cursor-pointer'
								onClick={() => setShowConfirmPass((prev) => !prev)}
							>
								{showConfirmPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
							</div>
						</div>
						<Button type='submit' disabled={isLoading} sx={{ mt: 2 }} fullWidth>
							{isLoading ? 'Have Patience...' : 'Change Password'}
						</Button>
					</LFForm>
				</div>
			</Container>
		</PrivateRoute>
	);
};

export default ChangePassword;
