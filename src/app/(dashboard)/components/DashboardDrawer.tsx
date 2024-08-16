'use client';
import BlackLogo from '@/assets/logo/logo-b.png';
import { useAppSelector } from '@/redux/hooks';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack,
	Toolbar
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaRegUser, FaUsers } from 'react-icons/fa';
import { FaSquarePollVertical, FaTableCells } from 'react-icons/fa6';
import { IoChevronBackCircle } from 'react-icons/io5';
import { MdReportProblem } from 'react-icons/md';
const drawerWidth = 240;

const drawerLinks = [
	{
		title: 'Overview',
		icon: <FaSquarePollVertical />,
		link: '/dashboard'
	},
	{
		title: 'Users',
		icon: <FaUsers />,
		link: '/dashboard/users'
	},
	{
		title: 'Category',
		icon: <FaTableCells />,
		link: '/dashboard/category'
	},
	{
		title: 'Reports',
		icon: <MdReportProblem />,
		link: '/dashboard/reports'
	},
	{
		title: 'Back to Home',
		icon: <IoChevronBackCircle />,
		link: '/'
	}
];

interface Props {
	children: React.ReactNode;
}

const DashboardDrawer = ({ children }: Props) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const user = useAppSelector((state: { auth: { user: any } }) => state.auth.user);

	const currentPath = usePathname();

	const handleDrawerClose = () => {
		setIsClosing(true);
		setMobileOpen(false);
	};

	const handleDrawerTransitionEnd = () => {
		setIsClosing(false);
	};

	const handleDrawerToggle = () => {
		if (!isClosing) {
			setMobileOpen(!mobileOpen);
		}
	};

	const drawer = (
		<div>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: '#ffffffd8'
				}}
			>
				<Image src={BlackLogo} alt='logo' width={140} height={80} />
			</Toolbar>
			<Divider />
			<List>
				{drawerLinks.map((link) => (
					<ListItem
						disablePadding
						key={link.link}
						component={Link}
						href={link.link}
						sx={{
							backgroundColor: currentPath === link.link ? '#1586FD' : '#fff',
							color: currentPath === link.link ? '#fff' : 'black',
							transition: 'all 0.2s',
							'&:hover': {
								backgroundColor: '#f5f5f5',
								color: 'black'
							}
						}}
					>
						<Stack
							direction='row'
							gap={1}
							alignItems='center'
							sx={{
								padding: '10px'
							}}
						>
							{link.icon}
							{link.title}
						</Stack>
					</ListItem>
				))}
			</List>
		</div>
	);

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
					boxShadow: 'none',
					borderBottom: '1px solid #F1F1F1'
				}}
			>
				<Toolbar
					sx={{
						backgroundColor: '#fff',
						color: 'black'
					}}
				>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Stack direction='column'>
						<Stack direction='row' gap={1} alignItems='center'>
							<FaRegUser /> {user?.username}
						</Stack>
						<Stack direction='row' gap={1} alignItems='center'>
							<CiMail /> {user?.email}
						</Stack>
					</Stack>
				</Toolbar>
			</AppBar>
			<Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					variant='temporary'
					open={mobileOpen}
					onTransitionEnd={handleDrawerTransitionEnd}
					onClose={handleDrawerClose}
					ModalProps={{
						keepMounted: true // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component='main' sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

export default DashboardDrawer;
