import React from 'react';
import {BuildingHeader} from "../components/BuildingPage/BuildingHeader";
import { LandmarkStyleSection } from '../components/BuildingPage/LandmarkStyleSection.jsx';
import { AmenitiesSection } from '../components/BuildingPage/AmenitiesSection.jsx';
import { BuildingFeaturesSection } from '../components/BuildingPage/BuildingFeaturesSection.jsx';
import { ResidenceNeighborhoodBanner } from '../components/BuildingPage/ResidenceNeighborhoodBanner.jsx';
const Building = () => {
    return (
        <div>
            <BuildingHeader />
            <LandmarkStyleSection />
            <AmenitiesSection />
            <BuildingFeaturesSection />
            {/* <ResidenceNeighborhoodBanner /> */}
        </div>
    );
}

export default Building;