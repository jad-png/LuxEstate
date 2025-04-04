<?php

namespace App\Services;

use App\Http\Requests\CreatePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Models\Property;
use App\Models\PropertyImage;
use App\Models\PropertyVideos;
use App\Services\Interfaces\IPropertyService;

class PropertyService implements IPropertyService
{

    /**
     * Get all properties.
     *
     * @return Property[]
     */
    public function all(): array
    {
        return Property::all()->toArray();
    }

    /**
     * Get a property by ID.
     *
     * @param int $id
     * @return Property|null
     */
    public function find(int $id): ?Property
    {
        return Property::findOrFail($id);
    }

    /**
     * Create a new property.
     *
     * @param CreatePropertyRequest $request
     * @return Property
     */
    public function create($request): Property
    {
        $property = Property::create($request->validated());
        return $property;
    }

    /**
     * Update a property by ID.
     *
     * @param int $id
     * @param UpdatePropertyRequest $request
     * @return Property
     */
    public function update(int $id, $request): Property
    {
        // dd('hello');
        $property = Property::findOrFail($id);

        if (!$property) {
            // return false;
            throw new \Exception('Property not found');
        }
        $property->update($request->validated());

        return $property;
    }

    /**
     * Delete a property by ID.
     *
     * @param int $id
     * @return bool
     */
    public function delete(int $id): bool
    {
        $property = Property::findOrFail($id);

        if (!$property) {
            return false;
        }

        return $property->delete();
    }

    /**
     * Add an image to a property.
     *
     * @param int $propertyId
     * @param string $imagePath
     * @return PropertyImage
     */
    public function addImage(int $propertyId, string $imagePath): PropertyImage
    {
        // dd(0);
        $property = Property::findOrFail($propertyId);

        // if (!$property) {
        //     // return false;
        //     throw new \Exception('Property not found');
        // }

        return PropertyImage::create([
            'property_id' => $property->id,
            'image_path' => $imagePath
        ]);
    }

    /**
     * Add a video to a property.
     *
     * @param int $propertyId
     * @param string $videoPath
     * @return PropertyVideos
     */
    public function addVideo(int $propertyId, string $videoPath): PropertyVideos
    {
        $property = Property::findOrFail($propertyId);

        if (!$property) {
            return false;
        }

        return PropertyVideos::create([
            'property_id' => $property->id,
            'video_path' => $videoPath
        ]);
    }
    /**
     * Attach features to a property.
     *
     * @param int $propertyId
     * @param array $featuresIds
     * @return void
     */
    public function attachFeatures(int $propertyId, array $featuresIds)
    {
        $property = Property::findOrFail($propertyId);
        $property->features()->sync($featuresIds);
    }
}
