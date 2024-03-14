import HeroStatSection from '../components/sections/HeroStats.section';
import {
    Navbar,
    // HeroSection,
    // AboutSection,
    TeamSection,
    FAQSection,
    ContactSection,
    SponsorSection,
    FooterSection,
} from '@components';

const Landing: React.FC = () => {
    return (
        // padding calculation
        // logo in navbar height = 3.5rem
        // navbar adds top and bottom padding of 2rem
        // total top padding = 3.5 + 4 = 7.5rem
        <div className="pt-[7.5rem]">
            <Navbar />
            {/* <HeroSection /> */}
            {/* <AboutSection /> */}
            <HeroStatSection />
            {/* <SponsorSection /> */}
            {/* <FAQSection /> */}
            {/* <TeamSection /> */}
            {/* <ContactSection /> */}
            {/* <FooterSection /> */}
        </div>
    );
};

export { Landing };
