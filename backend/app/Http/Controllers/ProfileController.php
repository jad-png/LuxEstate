<?php

namespace App\Http\Controllers;

use App\Services\ProfileService;
use App\Http\Requests\UpdateProfileRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    protected $profileService;

    public function __construct(ProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function update(UpdateProfileRequest $request): JsonResponse
    {
        try {
            $userId = Auth::user()->id;

            $user = $this->profileService->updateProfile($userId, $request);
            
            if (!$user) {
                return response()->json([
                    'message' => 'User not found'
                ], 404);
            }

            return response()->json([
                'message' => 'Profile updated successfully',
                'data' => $user
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error updating profile',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function updateProfilePicture(Request $request): JsonResponse
    {
        try {
            $userId = Auth::user()->id;

            if ($request->hasFile('profile_picture')) {
                $user = $this->profileService->updateProfilePicture($userId, $request->file('profile_picture'));
                
                if (!$user) {
                    return response()->json([
                        'message' => 'User not found'
                    ], 404);
                }

                return response()->json([
                    'message' => 'Profile picture updated successfully',
                    'data' => $user
                ], 200);
            } else {
                return response()->json([
                    'message' => 'No file uploaded'
                ], 400);
            }
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error updating profile picture',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    public function history(): JsonResponse
    {
        try {
            $userId = Auth::user()->id;

            $history = $this->profileService->getVisitHistory($userId);
            
            return response()->json([
                'message' => 'Visit history retrieved successfully',
                'data' => $history
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error retrieving visit history',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}