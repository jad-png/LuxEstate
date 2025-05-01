<?php

namespace App\Services;

use App\Http\Requests\UpdateProfileRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Models\User;
use App\Models\VisitRequest;
use App\Services\Interfaces\IProfileService;
use Illuminate\Http\UploadedFile;

class ProfileService implements IProfileService
{
    public function updateProfile($userId, UpdateProfileRequest $request)
    {
        $user = User::find($userId);
        // dd($request->all());
        if ($user) {
            $updateData = array_filter([
                'name' => $request->name ?? $user->name,
                'email' => $request->email ?? $user->email,
                'address' => $request->address ?? $user->address,
                'phone' => $request->phone ?? $user->phone,
                'profile_picture' => $request->profile_picture ?? $user->profile_picture,
            ]);

            if ($request->hasFile('profile_picture')) {
                $image = $request->file('profile_picture');
                $imagePath = $image->store('profile_pictures', 'public');
                $updateData['profile_picture'] = $imagePath;
            }


            $user->update($updateData);
            return $user;
        }
        return null;
    }
    public function updateProfilePicture($userId, UploadedFile $file)
    {
        $user = User::find($userId);
        if ($user) {
            $imagePath = $file->store('profile_pictures', 'public');
            $user->profile_picture = $imagePath;
            $user->save();
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
