<?php

namespace App\Services;

use App\Http\Requests\AddFeatureRequest;
use App\Http\Requests\UpdateFeatureRequest;
use App\Services\Interfaces\IFeaturesService;


class FeatureService implements IFeaturesService
{
    public function all()
    {

    }

    public function find(int $id) 
    {

    }

    /**
     * @param AddFeatureRequest $request
     * @return void
     */
    public function create($request)
    {

    }
    /**
     * @param UpdateFeatureRequest $request
     * @return void 
     */
    public function update(int $id, $request)
    {

    }

    public function delete(int $id)
    {

    }
}