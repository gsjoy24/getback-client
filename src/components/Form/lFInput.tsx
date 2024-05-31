import { Box, SxProps, TextField } from '@mui/material';
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
					sx={{ ...sx }}
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
							<Box
								sx={{
									display: 'flex',
									alignItems: 'center',
									gap: 1,
									position: 'relative',
									right: 10
								}}
							>
								<CiWarning size={16} /> {error?.message}
							</Box>
						)
					}
				/>
			)}
		/>
	);
};

export default LFInput;
