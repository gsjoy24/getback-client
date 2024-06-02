import { DateTimePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';
import { CiWarning } from 'react-icons/ci';

type TLFDatePickerProps = {
	setDate: Dispatch<SetStateAction<Dayjs | null>>;
	label?: string;
	dateError?: string | null;
	setDateError: Dispatch<SetStateAction<string | null>>;
};

const LFDatePicker = ({ setDate, label, dateError, setDateError }: TLFDatePickerProps) => {
	return (
		<DateTimePicker
			label={label || 'Date'}
			disableFuture
			onChange={(newValue) => setDate(newValue)}
			ampmInClock
			closeOnSelect
			slotProps={{
				field: { clearable: true, onClear: () => setDate(null) },
				textField: {
					size: 'small',
					variant: 'standard',
					helperText: dateError && (
						<span className='flex items-center gap-1 '>
							<CiWarning size={16} /> {dateError}
						</span>
					),
					error: !!dateError,
					onChange: () => {
						if (dateError) {
							setDateError(null);
						}
					}
				}
			}}
			sx={{
				width: '100%'
			}}
		/>
	);
};

export default LFDatePicker;
