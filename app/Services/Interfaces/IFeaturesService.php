<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\AddFeatureRequest;
use App\Http\Requests\UpdateFeatureRequest;
use App\Services\Interfaces\CrudInterface;

interface IFeaturesService extends CrudInterface 
{
    /**
     * @param AddFeatureRequest $request
     * @return void 
     */
    public function create($request);

    /**
     * @param UpdateFeatureRequest $request
     * @return void
     */
    public function update(int $id, $request);
}