<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $fillable = [
        'client_id',
        'agent_id',
        'date',
        'time',
        'status'
    ];

    protected $casts = [
        'date' => 'date',
        'time' => 'string',
        'status' => 'string'
    ];

    public function client()
    {
        return $this->belongsTo(User::class, 'client_id');
    }

    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }
}
