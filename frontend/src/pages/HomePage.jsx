import Navbar from '../components/Layout/Navbar';
import Hero from '../components/Sections/Hero';
import WhyChooseUs from '../components/Sections/WhyChooseUs';
import AboutUs from '../components/Sections/AboutUs';
import OurServices from '../components/Sections/OurServices';
import BuiltForSection from '../components/Sections/BuiltForSection';
import OurApproach from '../components/Sections/OurApproach';
import HowItWorks from '../components/Sections/HowItWorks';
import ContactForm from '../components/Sections/ContactForm';
import FAQ from '../components/Sections/FAQ';
import Footer from '../components/Layout/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <AboutUs />
      <OurServices />
      <BuiltForSection />
      <OurApproach />
      <HowItWorks />
      <ContactForm />
      <FAQ />
      <Footer />
    </>
  );
}

export default HomePage;
