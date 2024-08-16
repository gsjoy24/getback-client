import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import Reunion from '@/components/Home/Reunion';
import StayUpdated from '@/components/Home/StayUpdated';
import Loading from '@/components/Loading/Loading';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const RecentFoundItems = dynamic(() => import('@/components/Home/RecentFoundItems'), {
	ssr: false,
	loading: () => <Loading />
});
const RecentLostItems = dynamic(() => import('@/components/Home/RecentLostItems'), {
	ssr: false,
	loading: () => <Loading />
});

export const metadata: Metadata = {
	title: 'Home - GetBack',
	description:
		'GetBack is a platform for finding lost items. Post your lost items and find them easily. We help you find your lost items. Join us on our journey! Find out how we transform moments of loss into stories of reunion and hope. Stay updated with the latest news and updates.'
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
