'use client';
import subscribeSchema from '@/schemas/subscribeScema';
import subscribeToNewsLetter from '@/services/actions/subscribeToNewsLetter';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import LFForm from '../Form/LFForm';
import LFInput from '../Form/lFInput';

const StayUpdated = () => {
	const [resetForm, setResetForm] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const handleSubmit = async (data: FieldValues) => {
		try {
			setLoading(true);
			const res = await subscribeToNewsLetter(data);
			if (res.success) {
				toast.success(res.message);
			} else {
				toast.error(res.message);
			}
		} catch (error: any) {
			toast.error(error?.message);
		} finally {
			setResetForm(true);
			setLoading(false);
		}
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
				},
				position: 'relative'
			}}
		>
			<div className='pattern absolute top-0 right-0'></div>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant='h4' component='h2' gutterBottom>
					Stay Updated
				</Typography>
				<Typography variant='body2' component='p' gutterBottom>
					Subscribe to our newsletter to receive the latest news!
				</Typography>
			</Box>

			<LFForm onSubmit={handleSubmit} resolver={zodResolver(subscribeSchema)} resetForm={resetForm}>
				<LFInput name='email' label='Enter your email' type='email' />
				<Button fullWidth type='submit' sx={{ mt: 1 }}>
					{loading ? (
						<>
							<svg
								className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
							>
								<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
								<path
									className='opacity-75'
									fill='currentColor'
									d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
								></path>
							</svg>
							<span>Subscribing...</span>
						</>
					) : (
						'Subscribe'
					)}
				</Button>
			</LFForm>
		</Stack>
	);
};

export default StayUpdated;
