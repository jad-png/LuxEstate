import React from 'react';
import { IntroSection } from '../components/HomePage/IntroSection.jsx';
import { ResidenceKitchenSection } from '../components/HomePage/ResidenceKitchenSection.jsx';
import { AmenitiesSection } from '../components/HomePage/AmenitiesSection.jsx';
import { ApartmentsShowcase } from '../components/HomePage/ApartmentsShowcase.jsx';
import { MoveInReadyHomes } from '../components/HomePage/MoveInReadyHomes.jsx';
import { SalesGalleryAppointment } from '../components/HomePage/SalesGalleryAppointment.jsx';
import { NeighborhoodCarousel } from '../components/HomePage/NeighborhoodCarousel.jsx';
import { TestimonialCityView } from '../components/HomePage/TestimonialCityView.jsx';
// TestimonialCityView
const Home = () => {
    return (
        <div>
            <IntroSection />

            <ResidenceKitchenSection />
            
            <AmenitiesSection />

            <ApartmentsShowcase />

            <MoveInReadyHomes />

            <SalesGalleryAppointment />

            <NeighborhoodCarousel />

            <TestimonialCityView />
        </div>
    );
};

export default Home;