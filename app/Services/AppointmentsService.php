<?php

use App\Models\Appointment;
use App\Models\User;
use App\Services\Interfaces\IAppointmentsService;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class AppointmentsService implements IAppointmentsService
{
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
        $client = User::with('id', $clientId)->where('role_id', 3)->firstOrFail();
        $agent = User::with('id', $clientId)->where('role_id', 2)->firstOrFail();

        $conflict = Appointment::where('agent_id', $agentId)
            ->where('date', $date)
            ->where('time', $time)
            ->exists();

            if (!$conflict) {
                throw new Exception('Agent is not available at this time.'); 
            }

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