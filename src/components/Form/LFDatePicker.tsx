import { DateTimePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { Dispatch, SetStateAction } from 'react';

type TLFDatePickerProps = {
	setDate: Dispatch<SetStateAction<Dayjs | null>>;
	label?: string;
};
// make it clearable
const LFDatePicker = ({ setDate, label }: TLFDatePickerProps) => {
	return (
		<DateTimePicker
			label={label || 'Date'}
			disableFuture
			onChange={(newValue) => setDate(newValue)}
			ampmInClock
			closeOnSelect
			slotProps={{
				field: { clearable: true },
				textField: { size: 'small', variant: 'standard' }
			}}
			sx={{
				width: '100%'
			}}
		/>
	);
};

export default LFDatePicker;
