<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisitRequest extends Model
{
    protected $fillable = ['client_id', 'property_id', 'date', 'time', 'status'];

    protected $casts = [
        'date' => 'date',
        'time' => 'datetime:H:i',
        'status' => 'string',
    ];

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function property()
    {
        return $this->belongsTo(Property::class, 'property_id');
    }
}
