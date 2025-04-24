<?php

namespace App\Services;

use App\Http\Requests\CreatePropertyRequest;
use App\Http\Requests\PaginationRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Models\Category;
use App\Models\Property;
use App\Models\PropertyFeature;
use App\Models\PropertyImage;
use App\Models\PropertyVideos;
use App\Services\Interfaces\IPropertyService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class PropertyService implements IPropertyService
{

    /**
     * Get all properties.
     *
     * @return Property[]
     */
    public function all(): Collection
    {
        return Property::with(['images', 'videos', 'features', 'category'])->get();
    }

    /**
     * Get a property by ID.
     *
     * @param int $id
     * @return Property|null
     */
    public function find(int $id): ?Property
    {
        // dd('hello');

        return Property::with(['images', 'videos', 'features', 'category'])->findOrFail($id);
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

        $data = $request->validated();
        // dd($request->all(), $data); 
        $property->update($data);
        
        // $original = $property->toArray();
        // $result = $property->update($data);
        // $updated = $property->fresh()->toArray();

        // dd($data, $result, $original, $updated);

        if ($request->hasFile('image_path')) {
            foreach ($request->file('image_path') as $image) {
                $imagePath = $image->store('property_images', 'public');
                $this->addImage($property->id, $imagePath);
            }
        }

        if ($request->hasFile('video_path')) {
            foreach ($request->file('video_path') as $video) {
                $videoPath = $video->store('property_videos', 'public');
                $this->addVideo($property->id, $videoPath);
            }
        }
        
        if ($request->has('feature_ids') && !empty($request->input('feature_ids'))) {
            $this->attachFeatures($property->id, $request->input('feature_ids'));
        }
        

        return $property->fresh();
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
        $property = Property::findOrFail($propertyId);

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
        // dd(2);
        $property = Property::findOrFail($propertyId);
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
        // dd($featuresIds);
        $property = Property::findOrFail($propertyId);
        $property->features()->sync($featuresIds);
    }

    public function getWithCategory($categoryId, Request $request)
    {
        $perPage = $request->query('per_page', 6);
        // $test = Category::with("properties.images", "properties.videos")->toSql();
        // dd($test);
        // // return 
        $property = Property::with('images', 'videos', 'features', 'category')
            ->where('category_id', $categoryId)
            ->paginate($perPage);

        return $property;
    }
}
