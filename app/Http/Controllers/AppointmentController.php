<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAppointmentRequest;
use App\Http\Requests\GetAppointmentRequest;
use App\Models\Appointment;
use App\Services\Interfaces\IAppointmentsService;
use AppointmentsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
   protected $appointmentService;

   public function __construct(IAppointmentsService $appointmentService)
   {
        $this->appointmentService = $appointmentService;
   }

   /**
    * Summary of create
    * @param CreateAppointmentRequest $request
    * @return JsonResponse
    */
   public function create(CreateAppointmentRequest $request)
   {
        $client = Auth::user();

        $appointment = $this->appointmentService->createAppointment(
            $client->id,
            $request->agent_id,
            $request->date,
            $request->time
        );

        return response()->json([
            'message' => 'Appointment scheduled successfully',
            'appointment' => $appointment
        ]);
   }

   /**
    * Summary of getAppointments
    * @param GetAppointmentRequest $request
    * @return JsonResponse
    */
   public function getAppointments(GetAppointmentRequest $request)
   {
        $client = Auth::user();

        $appointments = $this->appointmentService->getClientAppointments($client->id);

        return response()->json([
            'message' => 'all appointments',
            'appointments' => $appointments
        ]);
   }

}
