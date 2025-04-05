<?php

namespace App\Services;

use App\Http\Requests\AddFeatureRequest;
use App\Http\Requests\UpdateFeatureRequest;
use App\Models\PropertyFeature;
use App\Services\Interfaces\IFeaturesService;


class FeatureService implements IFeaturesService
{
    public function all()
    {
        return PropertyFeature::all();
    }

    public function find(int $id) 
    {
        $feature = PropertyFeature  ::findOrFail($id);
        return $feature;
    }

    /**
     * @param AddFeatureRequest $request
     * @return PropertyFeature
     */
    public function create($request)
    {
        return PropertyFeature::create($request->validated());
    }
    /**
     * @param UpdateFeatureRequest $request
     * @return PropertyFeature
     */
    public function update(int $id, $request)
    {
        $feature = PropertyFeature::findOrFail($id);
        $feature->update($request->validated());
        return $feature;
    }

    public function delete(int $id)
    {
        $feature = PropertyFeature::findOrFail($id);
        $feature->delete();
    }
}