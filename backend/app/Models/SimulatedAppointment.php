<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SimulatedAppointment extends Model
{
    protected $table = 'simulated_appointment';

    protected $fillable = [
        'name',
        'date',
        'time',
        'status'
    ];

    public $timestamps = true;


    public function agent()
    {
        return $this->belongsTo(User::class, 'agent_id');
    }
}
