<?php 

namespace App\Services;

use App\Http\Requests\UpdatePropertyRequest;
use App\Models\User;
use App\Models\VisitRequest;
use App\Services\Interfaces\IProfileService;

class ProfileService implements IProfileService
{
    public function updateProfile($userId, UpdatePropertyRequest $request)
    {
        $user = User::find($userId);
        if ($user) {
            $user->update(array_filter([
                'name' => $request->name ?? $user->name,
                'email' => $request->email ?? $user->email,
                'address' => $request->address ?? $user->address,
                'phone' => $request->phone ?? $user->phone,
                'profile_picture' => $request->profile_picture ?? $user->profile_picture,
            ]));
            return $user;
        }
        return null;
    }

    public function getVisitHistory($userId)
    {
        return VisitRequest::where('user_id', $userId)
            ->select('id', 'purpose', 'status', 'created_at')
            ->orderBy('created_at', 'desc')
            ->get();
    }
}