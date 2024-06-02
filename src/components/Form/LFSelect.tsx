import { FormControl, FormHelperText, InputLabel, MenuItem, Select, SxProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';

type LFSelectProps = {
	label?: string;
	options: { value: string | number; label: string }[];
	name: string;
	sx?: SxProps;
};

const LFSelect = ({ label, options, name, sx }: LFSelectProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState: { error } }) => (
				<FormControl sx={{ width: '100%' }} disabled={!options}>
					<InputLabel id='demo-select-small-label'>Category</InputLabel>
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
						{options?.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
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
