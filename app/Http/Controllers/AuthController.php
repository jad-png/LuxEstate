<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Services\ServiceInterface\IAuthService;

class AuthController extends Controller
{
    protected $authService;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(IAuthService $authService)
    {
        $this->authService = $authService;
    }

    public function Register(RegisterRequest $request)
    {

        $user = $this->authService->Register($request);
        
        return response()->json([
            'message' => 'User registered successfully',
            'token' => $user['token'],
        ]);
    }

    public function Login(LoginRequest $request)
    {
        $user = $this->authService->login($request);
        
        return response()->json([
            'message' => 'User logged in successfully',
            'user' => $user['user'],
            'token' => $user['token'],
        ]);
    }
}
