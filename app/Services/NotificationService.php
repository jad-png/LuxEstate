<?php

namespace App\Services;

use App\Http\Requests\BulkPropertyNotificationRequest;
use App\Http\Requests\StoreNotificationRequest;
use App\Models\Notification;
use App\Services\Interfaces\INotificationService;
use Illuminate\Database\Eloquent\Collection;

class NotificationService implements INotificationService
{
    /**
     * Summary of createNotification
     * @param int $senderId
     * @param StoreNotificationRequest $request
     * @return Notification
     */
    public function createNotification($senderId, $request)
    {
        // Logic to create a notification
    }
    
    /**
     * Summary of getUserNotifications
     * @param int $userId
     * @return Collection
     */
    public function getUserNotifications($userId)
    {
        // Logic to get user notifications
    }

    /**
     * Summary of markAsRead
     * @param int $userId
     * @param int $notificationId
     * @return Notification
     */
    public function markAsRead($userId, $notificationId)
    {
        // Logic to mark a notification as read
    }

    /**
     * Summary of sendBulkPropertyNotification
     * @param int $senderId
     * @param BulkPropertyNotificationRequest $request
     * @return void
     */
    public function sendBulkPropertyNotification($senderId, $request)
    {
        // Logic to send bulk property notifications
    }
}