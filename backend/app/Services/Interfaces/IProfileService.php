<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\UpdateProfileRequest;

interface IProfileService
{
    public function updateProfile($userId,UpdateProfileRequest $request);
    public function getVisitHistory($userId);
}