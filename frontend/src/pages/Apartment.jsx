import React from "react";
import { ApartmentsHeader } from "../components/Apartments/ApartmentHeader";
import { ApartmentTypesShowcase } from "../components/Apartments/ApartmentTypesShowcase";

const Apartment = () => {
    return (
        <div>
            <ApartmentsHeader />
            <ApartmentTypesShowcase />
        </div>
    )
}

export default Apartment;