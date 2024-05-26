import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import RecentLostItems from '@/components/Home/RecentLostItems';
import Navbar from '@/components/Shared/Navbar/Navbar';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<RecentLostItems />
		</>
	);
};

export default HomePage;
