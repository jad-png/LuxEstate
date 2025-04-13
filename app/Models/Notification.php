<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'user-id',
        'sender_id',
        'type',
        'message',
        'status'
    ];

    protected $casts = [
        'type' => 'string',
        'status' => 'string'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_id');  
    }
}
