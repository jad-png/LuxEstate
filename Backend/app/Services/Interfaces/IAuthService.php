<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;

interface IAuthService
{
    public function register(RegisterRequest $request);
    public function login(LoginRequest $request);
}