<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAppointmentRequest;
use App\Models\Appointment;
use AppointmentsService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AppointmentController extends Controller
{
   protected $appointmentService;

   public function __construct(AppointmentsService $appointmentService)
   {
        $this->appointmentService = $appointmentService;
   }

   /**
    * Summary of create
    * @param CreateAppointmentRequest $request
    * @return JsonResponse
    */
   public function create($request)
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
    * @return void
    */
   public function getAppointments()
   {

   }

}
