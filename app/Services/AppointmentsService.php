<?php

namespace App\Services;

use App\Models\Appointment;
use App\Models\User;
use App\Services\Interfaces\IAppointmentsService;
use Exception;
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