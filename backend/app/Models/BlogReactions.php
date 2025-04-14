<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogReactions extends Model
{
    protected $table = 'blog_reactions';

    protected $fillable = [
        'blog_post_id',
        'user_id',
        'reaction_type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
