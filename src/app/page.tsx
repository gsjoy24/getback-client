import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import RecentFoundItems from '@/components/Home/RecentFoundItems';
import RecentLostItems from '@/components/Home/RecentLostItems';
import Reunion from '@/components/Home/Reunion';
import StayUpdated from '@/components/Home/StayUpdated';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home - Lost & Found',
	description:
		'Lost & Found is a platform for finding lost items. Post your lost items and find them easily. We help you find your lost items. Join us on our journey! Find out how we transform moments of loss into stories of reunion and hope. Stay updated with the latest news and updates.'
};

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<RecentLostItems />
			<RecentFoundItems />
			<Reunion />
			<StayUpdated />
		</>
	);
};

export default HomePage;
