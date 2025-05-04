<?php

namespace App\Providers;

use App\Services\AuthService;
use App\Services\ContactRequestService;
use App\Services\FeatureService;
use App\Services\Interfaces\IAppointmentsService;
use App\Services\PropertyService;
use App\Services\Interfaces\IAuthService;
use App\Services\Interfaces\IContactRequestService;
use App\Services\Interfaces\IFeaturesService;
use App\Services\Interfaces\IPropertyService;
use App\Services\AppointmentsService;
use App\Services\BlogCategoryService;
use App\Services\BlogService;
use App\Services\Interfaces\IVisitRequestService;
use App\Services\Interfaces\IBlogCategoryService;
use App\Services\Interfaces\IBlogService;
use App\Services\Interfaces\INotificationService;
use App\Services\Interfaces\ISearchService;
use App\Services\NotificationService;
use App\Services\SearchService;
use App\Services\VisitRequestService;
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
        $this->app->bind(IContactRequestService::class, ContactRequestService::class);
        $this->app->bind(IAppointmentsService::class, AppointmentsService::class);
        $this->app->bind(IBlogService::class, BlogService::class);
        $this->app->bind(INotificationService::class, NotificationService::class);
        $this->app->bind(IBlogCategoryService::class, BlogCategoryService::class);
        $this->app->bind(IVisitRequestService::class, VisitRequestService::class);
        $this->app->bind(ISearchService::class, SearchService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
