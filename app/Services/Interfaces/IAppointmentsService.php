<?php

namespace App\Services\Interfaces;

use App\Models\Appointment;
use Illuminate\Database\Eloquent\Collection;

interface IAppointmentsService
{
    /**
     * Summary of createAppointment
     * @param int $clientId
     * @param int $agentId
     * @param string $date
     * @param string $time
     * @return Appointment
     */
    public function createAppointment($clientId, $agentId, $date, $time);

    /**
     * Summary of getClientAppointments
     * @param int $clientId
     * @return Collection
     */
    public function getClientAppointments($clientId);
}