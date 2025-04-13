<?php

namespace App\Services;

use App\Http\Requests\BulkPropertyNotificationRequest;
use App\Http\Requests\StoreNotificationRequest;
use App\Models\Notification;
use App\Models\User;
use App\Services\Interfaces\INotificationService;
use Illuminate\Container\Attributes\DB;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB as FacadesDB;
use InvalidArgumentException;
use Symfony\Component\CssSelector\Parser\Handler\StringHandler;

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
        $sender = User::findOrFail($senderId);
        $recipient = User::findOrFail($request->user_id);

        if (!$sender->isAdmin() && !$sender->isAgent()) {
            throw new InvalidArgumentException('Only admins or agents can send notifications');
        }

        if (!$recipient->isClient()) {
            throw new InvalidArgumentException('Notifications can only be sent to clients');
        }

        $message = $this->generateMessage($request->type, $request->data);

        return FacadesDB::transaction(function ($senderId, $recipient, $request, $message) {
            return Notification::create([
                'user_id' => $recipient->id,
                'sender_id' => $senderId,
                'type' => $request->type,
                'message' => $message,
                'status' => 'Unread',
                'data' => $request->data,
            ]);
        });

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

    public function generateMessage(string $type, ?array $data = null): string
    {
        return match ($type) {
            'ContactAccepted' => 'Your contact request has been accepted.',
            'AppointmentScheduled' => isset($data['appointment_id'])
                ? "An appointment has been scheduled (ID: {$data['appointment_id']})."
                : 'An appointment has been scheduled.',
            'NewPropertyPosted' => isset($data['property_id'])
                ? "A new property has been posted (ID: {$data['property_id']})."
                : 'A new property has been posted.',
            default => throw new InvalidArgumentException("Unsupported notification type: $type"),
        };
    }
}