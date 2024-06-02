import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type LFSelectProps = {
	label?: string;
	name: string;
	sx?: SxProps;
};

const LFSelect = ({ label, name, sx }: LFSelectProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<FormControl sx={{ width: '100%' }}>
					<InputLabel id='demo-select-small-label'>Age</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						{...field}
						sx={{ ...sx, bgcolor: 'white', width: '100%', borderRadius: '5px' }}
						label={label}
						placeholder={label}
						variant='standard'
						size='small'
						value={field.value || ''}
						error={!!error?.message}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
					{error?.message && (
						<FormHelperText>
							{
								<span className='flex items-center gap-1 relative right-3'>
									<CiWarning size={16} /> {error?.message}
								</span>
							}
						</FormHelperText>
					)}
				</FormControl>
			)}
		/>
	);
};

export default LFSelect;
