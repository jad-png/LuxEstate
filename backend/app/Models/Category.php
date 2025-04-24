<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'bathrooms', 'square_footage', 'bedrooms'];

    public function properties() {
        $this->hasMany(Property::class);
    }
}
