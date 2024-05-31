import { Typography } from '@mui/material';
import Link from 'next/link';

interface TNavItemProps {
	link: {
		href: string;
		title?: string;
	};
	setOpen?: (open: boolean) => void;
}

const NavItem = ({ link, setOpen }: TNavItemProps) => {
	return (
		<Typography
			color='#000'
			component={Link}
			href={link.href}
			onClick={() => setOpen && setOpen(false)}
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
			{link?.title || 'Explore More'}
			<span></span>
		</Typography>
	);
};

export default NavItem;
