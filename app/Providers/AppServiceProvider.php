<?php

namespace App\Providers;

use App\Services\AuthService;
use App\Services\FeatureService;
use App\Services\PropertyService;
use App\Services\Interfaces\IAuthService;
use App\Services\Interfaces\IFeaturesService;
use App\Services\Interfaces\IPropertyService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(IAuthService::class, AuthService::class);
        $this->app->bind(IPropertyService::class, PropertyService::class);
        $this->app->bind(IFeaturesService::class, FeatureService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
