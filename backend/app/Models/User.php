<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Kyojin\JWT\Traits\HasJWT;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasJWT;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function payload(): array 
    {
        // $payload = Parent::payload();\
        return [
            'role' => $this->role_id,
        ];
    }

    public function role()
    {
        return $this->belongsTo(Role::class, 'role_id');
    }

    public function isAdmin()
    {
        return $this->role_id === 1; // role id 1 represents admin in role table
    }

    public function isAgent()
    {
        return $this->role_id === 2; // role id 2 represents agent in role table
    }

    public function isClient()
    {
        return $this->role_id === 3; // role id 3 represents client in role table
    }

    public function favoriteProperties()
    {
        return $this->belongsToMany(Property::class, 'client_favorites', 'user_id', 'property_id')
            ->withTimestamps();
    }

    public function sentContactRequests()
    {
        return $this->hasMany(ContactRequest::class, 'client_id');
    }

    public function receivedContactRequests()
    {
        return $this->hasMany(ContactRequest::class, 'agent_id');
    }

    public function appointmentsAsClient()
    {
        return $this->hasMany(Appointment::class, 'client_id');
    }

    public function appointmentsAsAgent()
    {
        return $this->hasMany(Appointment::class, 'agent_id');
    }


    public function BlogPosts()
    {
        return $this->hasMany(BlogPost::class, 'author_id');
    }

    public function BlogComments()
    {
        return $this->hasMany(BlogComment::class);
    }

    public function BlogReactions()
    {
        return $this->hasMany(BlogReactions::class);
    }
    
    public function notifications()
    {
        return $this->hasMany(Notification::class, 'user_id');
    }

    public function sentNotifications()
    {
        return $this->hasMany(Notification::class, 'sender_id');
    }

    public function visitRequests()
    {
        return $this->hasMany(VisitRequest::class, 'client_id');
    }
}
