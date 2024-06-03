import { TQueryParams } from '@/types';
import { FormControl, InputLabel, MenuItem, Select, SxProps } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type LFSelectProps = {
	label?: string;
	options: { value: string | number; label: string }[];
	name: string;
	sx?: SxProps;
	setParams: Dispatch<SetStateAction<TQueryParams[]>>;
};

const LFFilterSelect = ({ label, options, name, sx, setParams }: LFSelectProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<FormControl sx={sx ? { ...sx } : { width: '100%' }} disabled={!options}>
					<InputLabel id='demo-select-small-label'>{label}</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						{...field}
						label={label}
						placeholder={label}
						variant='standard'
						size='small'
						value={field.value || ''}
						onChange={(e) => {
							field.onChange(e);
							setParams && setParams((prev: any) => [...prev, { name: 'categoryId', value: e.target.value }]);
						}}
					>
						{options?.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			)}
		/>
	);
};

export default LFFilterSelect;
