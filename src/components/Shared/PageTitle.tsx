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
					xs: '1.6rem',
					sm: '3rem'
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
