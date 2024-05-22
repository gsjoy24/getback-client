import AboutSection from '@/components/Home/AboutSection';
import HeroSection from '@/components/Home/HeroSection';
import Navbar from '@/components/Shared/Navbar/Navbar';

const HomePage = () => {
	return (
		<>
			<Navbar />
			<HeroSection />
			<AboutSection />
		</>
	);
};

export default HomePage;
