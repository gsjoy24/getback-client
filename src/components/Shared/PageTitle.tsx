import { Box, Typography } from '@mui/material';

type TPageTitleProps = {
	title: string;
	desc: string;
};

const PageTitle = ({ title, desc }: TPageTitleProps) => {
	return (
		<Box
			sx={{
				textAlign: 'center',
				my: 2
			}}
		>
			<Typography
				variant='h1'
				fontSize={{
					xs: '2.5rem',
					sm: '3.5rem'
				}}
			>
				{title}
			</Typography>
			<Typography variant='body2' mt={1}>
				{desc}
			</Typography>
		</Box>
	);
};

export default PageTitle;
