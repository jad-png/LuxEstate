<?php

namespace App\Services\Interfaces;

use App\Models\Appointment;
use Illuminate\Database\Eloquent\Collection;

interface IAppointmentsService
{
    public function all();
    /**
     * Summary of createAppointment
     * @param int $clientId
     * @param int $agentId
     * @param string $date
     * @param string $time
     * @return Appointment
     */
    public function createAppointment($clientId, $agentId, $date, $time);

    public function resolveAppointment($userId, $appointmentId, $status);
    
    /**
     * Summary of getClientAppointments
     * @param int $clientId
     * @return Collection
     */
    public function getClientAppointments($clientId);

    public function simulateAppointment($name, $date, $time, $agentId);

    public function getSimulatedAppointments($agentId); 
}