<?php 

namespace App\Services\Interfaces;

interface IProfileService
{
    public function updateProfile($userId, $data);
}