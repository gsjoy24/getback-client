import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import RecentLostItems from '@/components/Home/RecentLostItems';
import Reunion from '@/components/Home/Reunion';
import StayUpdated from '@/components/Home/StayUpdated';
import Footer from '@/components/Shared/LostItemCard/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
			<RecentLostItems />
			<Reunion />
			<StayUpdated />
			<Footer />
		</>
	);
};

export default HomePage;
