import React from 'react';
import { IntroSection } from '../components/HomePage/IntroSection.jsx';
import { ResidenceKitchenSection } from '../components/HomePage/ResidenceKitchenSection.jsx';
import { AmenitiesSection } from '../components/HomePage/AmenitiesSection.jsx';
import { ApartmentsShowcase } from '../components/HomePage/ApartmentsShowcase.jsx';

const Home = () => {
    return (
        <div>
            <IntroSection />

            <ResidenceKitchenSection />
            
            <AmenitiesSection />

            <ApartmentsShowcase />
        </div>
    );
};

export default Home;