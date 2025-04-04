<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PropertyVideos extends Model
{
    protected $fillable = ['property_id', 'video_path'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    } 
}
