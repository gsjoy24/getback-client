import { SxProps, TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type LFInputProps = {
	label?: string;
	type?: string;
	name: string;
	sx?: SxProps;
};

const LFInput = ({ label, type = 'text', name, sx }: LFInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					sx={{ ...sx, bgcolor: 'white' }}
					label={label}
					placeholder={label}
					type={type}
					variant='outlined'
					value={field.value || ''}
					size='small'
					fullWidth
					error={!!error?.message}
					helperText={
						error?.message && (
							<span className='flex items-center gap-1 relative right-3'>
								<CiWarning size={16} /> {error?.message}
							</span>
						)
					}
				/>
			)}
		/>
	);
};

export default LFInput;
