import { SxProps, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type LFInputProps = {
	label?: string;
	type?: string;
	name: string;
	sx?: SxProps;
	multiline?: boolean;
	rows?: number;
};

const LFInput = ({ label, type = 'text', name, sx, multiline = false, rows }: LFInputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<TextField
					{...field}
					inputProps={{ autoComplete: name }}
					sx={{ ...sx, width: '100%', borderRadius: '5px', mb: 2 }}
					label={label}
					placeholder={label}
					minRows={rows ?? 6}
					variant='standard'
					multiline={multiline}
					type={type}
					value={field?.value ?? ''}
					size='small'
					fullWidth
					error={!!error?.message}
					helperText={
						error?.message && (
							<span className='flex items-center gap-1 relative right-0'>
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
