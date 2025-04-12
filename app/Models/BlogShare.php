<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogShare extends Model
{
    protected $fillable = [
        'blog_post_id',
        'user_id',
        'platform',
    ];
}
