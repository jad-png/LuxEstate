<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddFavoriteRequest;
use App\Http\Requests\RemoveFavoriteRequest;
use App\Services\ClientFavoriteService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ClientFavoriteController extends Controller
{
    protected $favoriteService;

    public function __construct(ClientFavoriteService $favoriteService)
    {
        $this->favoriteService = $favoriteService;
    }

    /**
     * @param int $id
     * @param AddFavoriteRequest $request
     * @return JsonResponse
     */
    public function addFavorite($id, $request)
    {
        $user = $this->favoriteService->addFavorite($id, $request->validated());

        return response()->json([
            'message' => 'Property added to favorites successfully',
            'user' => $user,
        ], 200);
    }

    /**
     * @param int $id
     * @param RemoveFavoriteRequest $request
     * @return JsonResponse
     */
    public function removeFavorite($id, $request) 
    {
        $success = $this->favoriteService->removeFavorite($id, $request->validated());

        return response()->json([
            'message' => 'Property removed from favorites successfully',
            'success' => $success,
        ], 200);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getFavorites($id)
    {
        $favorites = $this->favoriteService->getFavorites($id);

        return response()->json([
            'message' => 'Favorites retrieved successfully',
            'favorites' => $favorites,
        ], 200);
    }
}
