<?php

namespace App\Services;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Services\Interfaces\IAuthService;
use Illuminate\Support\Facades\Hash;
use Kyojin\JWT\Facades\JWT;

class AuthService implements IAuthService
{
    public function Register (RegisterRequest $request)
    {

        $user = User::create([
            "name"=> $request->name,
            "phone"=> $request->phone,
            "email"=> $request->email,
            "password"=> Hash::make($request->password),
            "role_id"=> $request->role_id,
        ]);
// dd($user);
        $token = $user->createToken();

        return [
            "user" => $user,
            "token" => $token
        ];
    }

    public function login (LoginRequest $credentials    ) 
    {
        $user = User::where("email", $credentials[ "email"])->first();
        
        if (!$user || !Hash::check($credentials[ "password"], $user->password)) {
            return response()->json([
                "message" => "Invalid credentials"
            ], 401);

        }

        $token = $user->createToken();

        return [
            "user" => $user,
            "token" => $token
        ];
    }


}