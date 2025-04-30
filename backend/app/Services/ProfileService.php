<?php 

namespace App\Services;

use App\Models\User;

class ProfileService implements Interfaces\IProfileService
{
    public function updateProfile($userId, $request)
    {
        $user = User::find($userId);
        if ($user) {
            $user->update($request);
            return $user;
        }
        return null;
    }
}