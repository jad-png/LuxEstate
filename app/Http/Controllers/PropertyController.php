<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddImageRequest;
use App\Http\Requests\AddVideoRequest;
use App\Http\Requests\CreatePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Models\Property;
use App\Services\Interfaces\IPropertyService;
use App\Services\PropertyService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PropertyController extends Controller
{
    protected $propertyService;

    public function __construct(IPropertyService $propertyService)
    {
        $this->propertyService = $propertyService;
    }


    /**
     * Get all properties.
     * 
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $properties = $this->propertyService->all();
        return response()->json([
            'properties' => $properties,
        ], 200);
    }

    /**
     * Get a single property by ID.
     * 
     * @parma int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $property = $this->propertyService->find($id);
        return response()->json([
            'property' => $property,
        ], 200);
    }
    /**
     * Create a new property.
     *
     * @param CreatePropertyRequest $request
     * @return JsonResponse
     */
    public function store(CreatePropertyRequest $request): JsonResponse
    {
        $property = $this->propertyService->create($request);
        return response()->json([
            'message' => 'Property created successfully',
            'property' => $property,
        ], 201);
    }

    /**
     * Update an existing property.
     *
     * @param int $id
     * @param UpdatePropertyRequest $request
     * @return JsonResponse
     */
    public function update(UpdatePropertyRequest $request, int $id): JsonResponse
    {

        // dd('hello');
        $property = $this->propertyService->update($id, $request);

        return response()->json([
            'message' => 'Property updated successfully',
            'property' => $property,
        ], 200);
    }

    /**
     * Delete a property.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $result = $this->propertyService->delete($id);
        return response()->json([
            'message' => 'Property deleted successfully',
        ], $result ? 200 : 404);
    }

    /**
     * Add an image to a property.
     *
     * @param int $id
     * @param Request $request
     * @return JsonResponse
     */

    public function addImage(int $id, AddImageRequest $request): JsonResponse
    {
        $imagePath = $request->file('image')->store('property_images', 'public');
        
        $image = $this->propertyService->addImage($id, $imagePath);

        return response()->json([
            'data' => $image,
            'message' => 'Image added successfully',
        ], 201);
    }

    /**
     * Add a video to a property.
     *
     * @param int $id
     * @param Request $request
     * @return JsonResponse
     */

    public function addVideo(int $id, AddVideoRequest $request): JsonResponse
    {
        // dd($request->all);
        $videoPath = $request->file('video')->store('property_videos', 'public');

        $video = $this->propertyService->addVideo($id, $videoPath);

        return response()->json([
            'data' => $video,
            'message' => 'Video added successfully',
        ], 201);
    }

    /**
     * Attach features to a property.
     *
     * @param int $id
     * @param Request $request
     * @return JsonResponse
     */
    public function attachFeatures(int $id, Request $request): JsonResponse
    {
        // TODO: create a request class to validate the features
        // $result = $request->validate([]);
        $features = $this->propertyService->attachFeatures($id, $request->input('features'));
        return response()->json([
            'message' => 'Features attached successfully',
            'features' => $features, // for visualization purpose of the attached features
        ], 200);
    }

    public function storeFeature(Request $request): JsonResponse 
    {

        return response()->json();
    }
}
