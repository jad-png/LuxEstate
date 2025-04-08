<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddFavoriteRequest;
use App\Http\Requests\RemoveFavoriteRequest;
use App\Services\ClientFavoriteService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
    public function addFavorite(AddFavoriteRequest $request)
    {
        $user = Auth::user();
        $userFavorite = $this->favoriteService->addFavorite($user->id, $request->property_id);
        // dd($userFavorite);

        return response()->json([
            'message' => 'Property added to favorites successfully',
            'user' => $user,
        ], 201);
    }

    /**
     * @param int $id
     * @param RemoveFavoriteRequest $request
     * @return JsonResponse
     */
    public function removeFavorite(RemoveFavoriteRequest $request) 
    {
        $user = Auth::user();

        $success = $this->favoriteService->removeFavorite($user->id, $request->property_id);

        return response()->json([
            'message' => 'Property removed from favorites successfully',
            'success' => $success,
        ], 200);
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getFavorites()
    {
        $user = Auth::user();

        $favorites = $this->favoriteService->getFavorites($user->id);

        return response()->json([
            'message' => 'Favorites retrieved successfully',
            'favorites' => $favorites,
        ], 200);
    }
}
