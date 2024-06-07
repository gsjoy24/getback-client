import { Box, Typography } from '@mui/material';

type FaqItemProps = {
	question: string;
	answer: string;
};
const FaqItem = ({ question, answer }: FaqItemProps) => {
	return (
		<Box>
			<Typography variant='h6' gutterBottom>
				{question}
			</Typography>
			<Typography variant='body2' gutterBottom>
				{answer}
			</Typography>
		</Box>
	);
};

export default FaqItem;
