import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(localizedFormat);

const DateToString = (isoDateString: string): string => {
	return dayjs(isoDateString).utc().format('dddd, MMMM D, YYYY h:mm A');
};

export default DateToString;
