<?php

namespace App\Http\Controllers;

use App\Http\Requests\MarkAsReadRequest;
use App\Http\Requests\StoreNotificationRequest;
use App\Services\Interfaces\INotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    protected $notificationService;

    public function __construct(INotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }


    public function all()
    {
        $notifications = $this->notificationService->all();
        return response()->json($notifications);
    }
    public function store(StoreNotificationRequest $request)
    {
        // dd('hello');
        $user = Auth::user();
        $userId = $user->id;
// dd($request->user_id);
        $notification = $this->notificationService->createNotification($userId, $request);

        return response()->json([
            'message' => 'Notification created successfully',
            'notification' => $notification,
        ], 201);
    }

    public function index()
    {
        $user = Auth::user();
        $userId = $user->id;

        $notifications = $this->notificationService->getUserNotifications($userId);

        return response()->json([
            'notifications' => $notifications,
        ], 200);
    }

    
    public function markAsRead(MarkAsReadRequest $request)
    {
        $user = Auth::user();
        $userId = $user->id;

        $notification = $this->notificationService->markAsRead($userId, $request->notification_id);
        // dd($request->all());
        return response()->json([
            'message' => 'Notification marked as read',
            'notification' => $notification,
        ], 200);
    }

    public function getClients()
    {
        $clients = $this->notificationService->getUsers();

        return response()->json($clients);
    }
}
