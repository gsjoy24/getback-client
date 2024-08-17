import { Stack, Typography } from '@mui/material';

const DashboardPage = () => {
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
				OVERVIEW PAGE COMING SOON! <br />
				IN THE MEANTIME, CHECK OUT THE OTHER PAGES
			</Typography>
		</Stack>
	);
};

export default DashboardPage;
