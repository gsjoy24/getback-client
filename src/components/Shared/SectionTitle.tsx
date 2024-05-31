import { Stack, Typography } from '@mui/material';
type TSectionTitleProps = {
	title: string;
	desc: string;
};

const SectionTitle = ({ title, desc }: TSectionTitleProps) => {
	return (
		<Stack
			justifyContent='center'
			gap={2}
			sx={{
				textAlign: 'center',
				pb: 4,
				px: 1
			}}
		>
			<Typography variant='h4'>{title}</Typography>
			<Typography variant='body2'>{desc}</Typography>
		</Stack>
	);
};

export default SectionTitle;
