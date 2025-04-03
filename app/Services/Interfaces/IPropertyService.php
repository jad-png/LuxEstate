<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\CreatePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Models\Property;
use App\Models\PropertyImage;
use App\Models\PropertyVideos;
use App\Services\Interfaces\CrudInterface;

interface IPropertyService extends CrudInterface
{
    /**
     * 
     * @param CreatePropertyRequest $request
     * @return Property
     */
    public function create($request);

    /**
     * @param int $id
     * @param UpdatePropertyRequest $request
     * @return Property
     */
    public function update(int $id, $request);
    public function addImage(int $propertyId, string $imagePath): PropertyImage;

    public function addVideo(int $PropertyId, string $videoPath): PropertyVideos;

    public function attachFeatures(int $propertyId, array $featuresIds);
}