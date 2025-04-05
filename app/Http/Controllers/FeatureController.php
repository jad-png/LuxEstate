<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddFeatureRequest;
use App\Http\Requests\UpdateFeatureRequest;
use App\Models\Feature;
use App\Services\Interfaces\IFeaturesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FeatureController extends Controller
{

    protected $featureService;

    public function __construct (IFeaturesService $featuresService) 
    {
        $this->featureService = $featuresService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $features = $this->featureService->all();

        return response()->json([
            'features' => $features,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        $feature = $this->featureService->find($feature->id);

        return response()->json([
            'feature' => $feature,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddFeatureRequest $request)
    {
        $feature = $this->featureService->create($request);

        return response()->json([
            'feature' => $feature,
        ], 201);
    }


    /**
     * Update the specified resource in storage.
     * @param UpdateFeatureRequest $request
     */
    public function update($request, int $id)
    {
        $feature = $this->featureService->update( $id, $request);

        return response()->json([
            'feature' => $feature,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $this->featureService->delete($id);
        return response()->json([
            'message' => 'Feature deleted successfully',
        ], 200);
    }
}
