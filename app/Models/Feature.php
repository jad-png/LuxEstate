<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    protected $table = ['property_features']; 
    protected $fillable = ['name'];

    public function properties()
    {
        return $this->belongsToMany(Property::class, 'property_feature_property');
    }
}
