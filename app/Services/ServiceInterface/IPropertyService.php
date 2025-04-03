<?php 

namespace App\Services\ServiceInterface;

use App\Models\Property;
use App\Models\PropertyImage;
use App\Models\PropertyVideos;
use App\Services\Interfaces\CrudInterface;

interface IPropertyService extends CrudInterface
{        
    public function addImage(int $propertyId, string $imagePath): PropertyImage;

    public function addVideo(int $PropertyId, string $videoPath): PropertyVideos;

    public function attachFeatures(int $propertyId, array $featuresIds);
}