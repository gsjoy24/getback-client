import { MobileDateTimePicker } from '@mui/x-date-pickers';
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
		<MobileDateTimePicker
			label={label || 'Date'}
			disableFuture
			onChange={(newValue) => setDate(newValue)}
			ampmInClock
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
					onSelect: () => {
						setDateError(null);
					}
				}
			}}
			sx={{
				width: '100%',
				mb: 2
			}}
		/>
	);
};

export default LFDatePicker;
