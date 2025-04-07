<?php

namespace App\Services;

use App\Models\Property;
use App\Models\User;
use App\Services\Interfaces\IClientFavoriteService;
use Illuminate\Database\Eloquent\Collection;

class ClientFavoriteService implements IClientFavoriteService
{
    /**
     * @param int $clientId
     * @param int $userId
     * @return User
     */
    public function addFavorite($userId, $propertyId) 
    {
        $user = User::findOrFail($userId);

        $property = Property::findOrFail($propertyId);

        $user->favoriteProperties()->syncWithoutDetaching($property->id);

        return $user->fresh();
    }

    /**
     * @param int $userId
     * @param int $propertyId
     * @return bool
     */
    public function removeFavorite($userId, $propertyId)
    {
        $user = User::findOrFail($userId);

        $property = Property::findOrFail($propertyId);

        $user->favoriteProperties()->detach($property->id) > 0;

        return true;
    }
    /**
     * @param int $userId
     * @return Collection
     */
    public function getFavorites($userId)
    {
        $user = User::findOrFail($userId);

        return $user->favoriteProperties()->with(['images', 'videos', 'features'])->get();
    }
}