import { SxProps, TextField, Typography } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type LFInputProps = {
	label?: string;
	type?: string;
	name: string;
	sx?: SxProps;
	required?: boolean;
};

const LFInput = ({ label, type = 'text', name, sx, required }: LFInputProps) => {
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
					size='small'
					fullWidth
					required={required || false}
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
