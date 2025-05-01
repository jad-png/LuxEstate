<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\UpdateProfileRequest;
use Illuminate\Http\UploadedFile;

interface IProfileService
{
    public function updateProfile($userId, UpdateProfileRequest $request);

    public function updateProfilePicture($userId, UploadedFile $file);

    public function getVisitHistory($userId);
}