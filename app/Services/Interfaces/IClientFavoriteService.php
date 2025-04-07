<?php 

namespace App\Services\Interfaces;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

interface IClientFavoriteService
{
    /**
     * @param int $userId
     * @param int $propertyId
     * @return User
     */
    public function addFavorite($userId, $propertyId);

    /**
     * @param int $userId
     * @param int $propertyId
     * @return bool
     */
    public function removeFavorite($userId, $propertyId);

    /**
     * @param int $userId
     * @param int $propertyId
     * @return Collection
     */
    public function getFavorites($userId);
}