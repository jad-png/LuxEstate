<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
        'title',
        'description',
        'location',
        'price',
        'bedrooms', 
        'area',
        'status',
        'admin_id',
        'category_id'
    ];

    public function images()
    {
        return $this->hasMany(PropertyImage::class);
    }

    public function videos()
    {
        return $this->hasMany(PropertyVideos::class);
    }

    public function features()
    {
        // relation with property feature model
        return $this->belongsToMany(PropertyFeature::class, 'property_feature_property', 'property_id', 'property_feature_id');
    } 

    public function category() {
        $this->belongsTo(Category::class);
    }

    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id', 'id');
    }

    public function favoritebByClients()
    {
        return $this->belongsToMany( User::class, 'client_favorites', 'property_id', 'user_id')
            ->withTimestamps();
    }
}
