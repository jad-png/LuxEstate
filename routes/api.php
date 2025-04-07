<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\PropertyController;
use Illuminate\Support\Facades\Route;

// auth routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

// Property CRUD Routes
Route::prefix('properties')->group(function () {
    Route::get('/', [PropertyController::class, 'index']);          
    Route::get('/{id}', [PropertyController::class, 'show']);
    Route::post('/', [PropertyController::class, 'store']);
    Route::put('/{id}', [PropertyController::class, 'update']);
    Route::delete('/{id}', [PropertyController::class, 'destroy']);

    // Additional Routes for Images, Videos, and Features
    Route::post('/{id}/images', [PropertyController::class, 'addImage']);
    Route::post('/{id}/videos', [PropertyController::class, 'addVideo']);
    Route::post('/{id}/features', [PropertyController::class, 'attachFeatures']); 
});

// Feature routes
Route::prefix('features')->group(function () {
    Route::get('/', [FeatureController::class, 'index']);
    Route::post('/', [FeatureController::class, 'store']);
    Route::put('/{id}', [FeatureController::class, 'update']);
    Route::delete('/{id}', [FeatureController::class, 'destroy']);
});