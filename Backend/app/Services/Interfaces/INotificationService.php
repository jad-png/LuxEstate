<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\BulkPropertyNotificationRequest;
use App\Http\Requests\StoreNotificationRequest;
use App\Models\Notification;
use Illuminate\Support\Collection;

interface INotificationService
{
    /**
     * Summary of createNotification
     * @param int $senderId
     * @param StoreNotificationRequest $request
     * @return Notification
     */
    public function createNotification($senderId,StoreNotificationRequest $request);

    /**
     * Summary of getUserNotifications
     * @param int $userId
     * @return Collection
     */
    public function getUserNotifications($userId);

    /**
     * Summary of markAsRead
     * @param int $userId
     * @param int $notificationId
     * @return Notification
     */
    public function markAsRead($userId, $notificationId);

    /**
     * Summary of sendBulkPropertyNotification
     * @param int $senderId
     * @param BulkPropertyNotificationRequest $request
     * @return void
     */
    public function sendBulkPropertyNotification($senderId, $request);
}