<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogComments extends Model
{
    protected $table = 'blog_comments';

    protected $fillable = [
        'blog_post_id',
        'user_id',
        'comment'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
