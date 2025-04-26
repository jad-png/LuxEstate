<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    protected $table = 'blog_posts';
    protected $fillable = ['title', 'content', 'status', 'user_id', 'category_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(BlogComment::class);
    }

    public function reactions()
    {
        return $this->hasMany(BlogReactions::class);
    }

    public function category() {
        return $this->belongsTo(BlogCategory::class, 'categorie_id');
    }
}
