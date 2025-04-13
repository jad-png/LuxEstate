<?php

namespace App\Services;

use App\Services\Interfaces\INotificationService;

class NotificationService implements INotificationService
{
    public function createNotification($senderId, $request)
    {
        // Logic to create a notification
    }
    
    public function getUserNotifications($userId)
    {
        // Logic to get user notifications
    }

    public function markAsRead($userId, $notificationId)
    {
        // Logic to mark a notification as read
    }

    public function sendBulkPropertyNotification($senderId, $request)
    {
        // Logic to send bulk property notifications
    }
}