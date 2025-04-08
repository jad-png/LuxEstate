<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientFavoriteController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\PropertyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactRequestController;

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

// Client routes
Route::middleware('jwt')->group(function () {
    Route::post('/favorites', action: [ClientFavoriteController::class, 'addFavorite']);
    Route::delete('/favorites', [ClientFavoriteController::class, 'removeFavorite']);
    Route::get('/favorites', [ClientFavoriteController::class, 'getFavorites']);
});

// Contact Request routes
Route::middleware('jwt')->group(function () {
    Route::post('/contact-requests', action: [ContactRequestController::class, 'create']);
    Route::put('/contact-requests/resolve', [ContactRequestController::class, 'resolve']);
    Route::get('/contact-requests', [ContactRequestController::class, 'getMyRequests']);
});