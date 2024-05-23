import { Typography } from '@mui/material';
import Link from 'next/link';

interface TNavItemProps {
	link: {
		href: string;
		title: string;
	};
}

const NavItem = ({ link }: TNavItemProps) => {
	return (
		<Typography
			color='#000'
			component={Link}
			href={link.href}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				'& span': {
					width: '0%',
					height: 2,
					backgroundColor: 'primary.main',
					transition: 'width 0.2s ease'
				},
				'&:hover span': {
					width: '100%'
				}
			}}
		>
			{link.title}
			<span></span>
		</Typography>
	);
};

export default NavItem;
