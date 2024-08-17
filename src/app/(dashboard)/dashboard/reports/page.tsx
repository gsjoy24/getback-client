import { Stack, Typography } from '@mui/material';

const ReportsPage = () => {
	return (
		<Stack
			justifyContent='center'
			alignItems='center'
			sx={{
				height: '100%',
				width: '100%'
			}}
		>
			<Typography
				variant='h1'
				sx={{
					fontSize: {
						xs: '2rem',
						md: '3rem'
					}
				}}
			>
				NO REPORTS YET
			</Typography>
		</Stack>
	);
};

export default ReportsPage;
