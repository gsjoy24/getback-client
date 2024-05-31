import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import RecentLostItems from '@/components/Home/RecentLostItems';
import Reunion from '@/components/Home/Reunion';
import StayUpdated from '@/components/Home/StayUpdated';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<RecentLostItems />
			<Reunion />
			<StayUpdated />
		</>
	);
};

export default HomePage;
