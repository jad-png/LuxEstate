<?php

namespace App\Services;

use App\Http\Requests\StoreNotificationRequest;
use App\Models\Appointment;
use App\Models\User;
use App\Services\Interfaces\IAppointmentsService;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class AppointmentsService implements IAppointmentsService
{
    private const VALID_STATUSES = [
        'Scheduled',
        'Completed',
        'Cancelled'
    ];
    protected $notificationService;
    public function __construct(NotificationService $notificationService)
    {
        $this->notificationService = $notificationService;
    }
    /**
     * Summary of createAppointment
     * @param int $clientId
     * @param int $agentId
     * @param string $date
     * @param string $time
     * @return Appointment
     */
    public function createAppointment($clientId, $agentId, $date, $time)
    {
        $client = User::with('role')->where('id', $clientId)->firstOrFail();
        $agent = User::with('role')->where('id', $agentId)->firstOrFail();

        $conflict = Appointment::where('agent_id', $agentId)
            ->where('date', $date)
            ->where('time', $time)
            ->exists();

        // dd($conflict);
        if ($conflict) {
            throw new Exception('Agent is not available at this time.');
        };

        return DB::transaction(function () use ($client, $agent, $date, $time) {
            return Appointment::create([
                'client_id' => $client->id,
                'agent_id' => $agent->id,
                'date' => $date,
                'time' => $time,
                'statuts' => 'Scheduled'
            ]);
        });
    }

    public function resolveAppointment($userId, $appointmentId, $status)
    {
        if (!in_array($status, self::VALID_STATUSES)) {
            throw new Exception('Invalid status: ' . $status);
        }

        $user = User::findOrFail($userId);
        $appointment = Appointment::with(['client'])
            ->where('id', $appointmentId)
            ->firstOrFail();


        return DB::transaction(function () use ($appointment, $status, $user) {
            $appointment->update(['status' => $status]);

            $this->notificationService->createNotification(
                $user->id,
                new StoreNotificationRequest([
                    'user_id' => $appointment->client_id,
                    'type' => 'AppointmentScheduled',
                    'data' => [
                        'appointment_id' => $appointment->id,
                        'status' => $status,
                        'date' => $appointment->date,
                        'time' => $appointment->time,
                    ],
                ])
            );

            return $appointment->refresh();
        });
    }

    public function all()
    {
        $appointments = Appointment::with('client')->get();

        return $appointments;
    }

    /**
     * Summary of getClientAppointments
     * @param int $clientId
     * @return Collection
     */
    public function getClientAppointments($clientId)
    {
        return Appointment::where('client_id', $clientId)
            ->with('agent')
            ->orderBy('date', 'asc')
            ->orderBy('time', 'asc')
            ->get();
    }
}
