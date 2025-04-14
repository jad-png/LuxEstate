<?php

namespace App\Services;

use App\Http\Requests\BulkPropertyNotificationRequest;
use App\Http\Requests\StoreNotificationRequest;
use App\Models\Notification;
use App\Models\User;
use App\Services\Interfaces\INotificationService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB ;
use InvalidArgumentException;

class NotificationService implements INotificationService
{
    /**
     * Summary of createNotification
     * @param int $senderId
     * @param StoreNotificationRequest $request
     * @return Notification
     */
    public function createNotification($senderId, StoreNotificationRequest $request)
    {
        // dd('hello');
        $sender = User::findOrFail($senderId);
        $recipient = User::findOrFail($request->user_id);
// dd($sender);
        if (!$sender->isAdmin() && !$sender->isAgent()) {
            throw new InvalidArgumentException('Only admins or agents can send notifications');
        }

        if (!$recipient->isClient()) {
            throw new InvalidArgumentException('Notifications can only be sent to clients');
        }
        $message = $this->generateMessage($request->type, $request->data);

        return Notification::create([
            // 'user_id' => 6,
            'user_id' => $recipient->id,
            'sender_id' => $senderId,
            'type' => $request->type,
            'message' => $message,
            'status' => 'Unseen',
            'data' => $request->data,
        ]);
    }
    
    /**
     * Summary of getUserNotifications
     * @param int $userId
     * @return Collection
     */
    public function getUserNotifications($userId)
    {
        $user = User::findOrFail($userId);

        if (!$user->isClient()) {
            throw new InvalidArgumentException('Only clients can view notifications');
        }

        return $user->notifications()->latest()->get();
    }

    

    /**
     * Summary of markAsRead
     * @param int $userId
     * @param int $notificationId
     * @return Notification
     */
    public function markAsRead($userId, $notificationId)
    {
        $notification = Notification::where('user_id', $userId)
            ->where('id', $notificationId)
            ->firstOrFail();

        $notification->update(['status' => 'Seen']);
        
        return $notification;
    }

    /**
     * Summary of sendBulkPropertyNotification
     * @param int $senderId
     * @param BulkPropertyNotificationRequest $request
     * @return void
     */
    public function sendBulkPropertyNotification($senderId, $request)
    {
        $sender = User::findOrFail($senderId);

        if (!$sender->isAdmin() && !$sender->isAgent()) {
            throw new InvalidArgumentException('Only admins or agents can send notifications');
        }

        $clientRole = User::where('role_name', 'client')->value('id');
        
        $clients = User::where('role_id', $clientRole)->get();
        
        DB::transaction(function () use ($senderId, $request, $clients)  {
            foreach ($clients as $client) {
                Notification::create([
                    'user_id' => $client->id,
                    'sender_id' => $senderId,
                    'type' => 'NewPropertyPosted',
                    'message' => $request->message,
                    'status' => 'Unseen',
                    'data' => [
                        'property_id' => $request->property_id,
                    ],
                ]);

                dd($request->all());
            }
        });
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