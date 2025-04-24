import React, { useState, useEffect } from "react";
import useCategoryStore from "../stores/categoryStore";
import usePropertyStore from "../stores/PropertyStore";

export function CategoryPropertiesPage() {
    const { categories, error: categoryError, fetchCategories } = useCategoryStore();
    const { propertiesByCategory, fetchCategorizedProperties, error: propertyError } = usePropertyStore();
    const [selectedCategoryId, setSelectedCategoryId] = useState('');

    useEffect(() => {
        if (categories.length === 0 ) {
            fetchCategories();
        }
    }, [fetchCategories, categories.length]);

    useEffect(() => {
        if (selectedCategoryId && !propertiesByCategory[selectedCategoryId] && !propertyError) {
            fetchCategorizedProperties(selectedCategoryId);
        }
    }, [selectedCategoryId, propertiesByCategory, propertyError, fetchCategorizedProperties]);

    useEffect(() => {
        if (categories.length > 0 && !selectedCategoryId) {
            setSelectedCategoryId(categories[0].id.toString());
        }
    }, [categories, setSelectedCategoryId]);
}
