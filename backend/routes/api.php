<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientFavoriteController;
use App\Http\Controllers\FeatureController;
use App\Http\Controllers\PropertyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactRequestController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\BlogCategoryController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\VisitRequestController;
use App\Services\VisitRequestService;

// auth routes
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});

// Property CRUD Routes
Route::middleware('jwt')->prefix('properties')->group(function () {
    Route::get('/', [PropertyController::class, 'index']);          
    Route::get('/{id}', [PropertyController::class, 'show']);
    Route::post('/', [PropertyController::class, 'store']);
    Route::put('/{id}', [PropertyController::class, 'update']);
    Route::delete('/{id}', [PropertyController::class, 'destroy']);
    Route::get('/category/{categoryId}', [PropertyController::class, 'getWithCategory']);
    // Additional Routes for Images, Videos, and Features
    Route::post('/{id}/images', [PropertyController::class, 'addImage']);
    Route::post('/{id}/videos', [PropertyController::class, 'addVideo']);
    Route::post('/{id}/features', [PropertyController::class, 'attachFeatures']); 
});

// Feature routes
Route::middleware('jwt')->prefix('features')->group(function () {
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

// Appointment routes
Route::middleware('jwt')->prefix('appointments')->group(function () {
    Route::post('/', action: [AppointmentController::class, 'create']);
    Route::get('/mine', [AppointmentController::class, 'getAppointments']);
});

// Blog post routes
Route::middleware('jwt')->prefix('blog')->group(function () {
    Route::get('/posts', [BlogPostController::class, 'index']);
    Route::get('/posts/category/{categoryId}', [BlogPostController::class, 'byCategory']); 
    Route::get('/posts/{id}', [BlogPostController::class, 'show'])->name('blog.show');
    
    Route::post('/posts', [BlogPostController::class, 'store']);
    Route::put('/posts/{id}', [BlogPostController::class, 'update']);
    
    // Comment routes
    Route::post('posts/comment', [BlogPostController::class, 'comment']);
    Route::delete('posts/comment', [BlogPostController::class, 'removeComment']);
    
    Route::delete('posts/{id}', [BlogPostController::class, 'destroy']);
    
    // React routes
    Route::post('posts/react', [BlogPostController::class, 'react']);
    
    // Share routes
    Route::post('posts/share', [BlogPostController::class, 'sharePost']);
});

// notification routes
Route::middleware('jwt')->prefix( prefix: '')->group(function () {
    Route::post('/', [NotificationController::class, 'store']);
    Route::get('/', [NotificationController::class, 'index']);
    Route::patch('/{notification_id}/read', [NotificationController::class, 'markAsRead']);
});

// category routes
Route::middleware('jwt')->prefix('category')->group(function () {
    Route::get('', [CategoryController::class, 'index']);
    Route::get('/{id}', [CategoryController::class, 'show'])->name('blog.show');;
    Route::post('', [CategoryController::class, 'store']);
    Route::put('/{id}', [CategoryController::class, 'update']);
    Route::delete('/{id}', [CategoryController::class, 'destroy']);
});

Route::middleware('jwt')->get('/agents', [AppointmentController::class, 'getAgents']);
Route::middleware('jwt')->get('/clients', [NotificationController::class, 'getClients']);

// Blog category routes
Route::middleware('jwt')->prefix('blog/category')->group(function () {
    Route::get('/', [BlogCategoryController::class, 'index']);
    Route::get('/{categoryId}', [BlogCategoryController::class, 'getByCategory']);
    
    Route::get('/{id}', [BlogCategoryController::class, 'show']);
    Route::post('/', [BlogCategoryController::class, 'store']);
    Route::put('/{id}', [BlogCategoryController::class, 'update']);
    Route::delete('/{id}', [BlogCategoryController::class, 'destroy']);
});

Route::middleware('jwt')->prefix('visit-request')->group(function () {
    Route::get('', [VisitRequestController::class, 'index']);
    Route::post('', [VisitRequestController::class, 'store']);
    Route::put('/{id}/status', [VisitRequestController::class, 'update']);
});
