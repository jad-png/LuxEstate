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
        'admin_id'
    ];

    public function images()
    {
        // return $this->hasMany(::class);
    }

    public function videos()
    {
        // return $this->hasMany(::class);
    }

    public function features()
    {
        // relation with property feature model
    } 


    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id', 'id');
    }
}
