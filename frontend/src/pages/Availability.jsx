import React from "react";
import { AvailabilityHeader } from "../components/AvailabilityPage/AvailabilityHeader";
import { MoveInReadyHomes } from "../components/HomePage/MoveInReadyHomes";
import { ToursContactSection } from "../components/AvailabilityPage/TourContact";

const Availability = () => {
    return (
        <div>
            <AvailabilityHeader />
            <MoveInReadyHomes />
            <ToursContactSection />
        </div>
    );
};

export default Availability;