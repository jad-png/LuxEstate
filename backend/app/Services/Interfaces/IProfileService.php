<?php 

namespace App\Services\Interfaces;

interface IProfileService
{
    public function getProfile($userId);
    public function updateProfile($userId, $data);
    public function changePassword($userId, $oldPassword, $newPassword);
    public function deleteAccount($userId);
}