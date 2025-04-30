<?php 

namespace App\Services;

use App\Models\User;
use App\Services\Interfaces\IProfileService;

class ProfileService implements IProfileService
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