<?php

namespace App\Services;

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

    }

    /**
     * @param int $userId
     * @param int $propertyId
     * @return bool
     */
    public function removeFavorite($userId, $propertyId)
    {

    }
    /**
     * @param int $userId
     * @return Collection
     */
    public function getFavorites($userId)
    {

    }
}