import React from 'react';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import TeamSection from './TeamSection';
import CallToActionSection from './CallToActionSection';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to Our Application</h1>
            <AboutSection />
            <FeaturesSection />
            <HowItWorksSection />
            <TeamSection />
            <CallToActionSection />
        </div>
    );
};

export default HomePage;