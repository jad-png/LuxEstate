<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAppointmentRequest;
use App\Http\Requests\CreateSimulatedRequest;
use App\Http\Requests\GetAppointmentRequest;
use App\Models\Appointment;
use App\Models\User;
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

     public function index()
     {
          $appointments = $this->appointmentService->all();
          return response()->json($appointments);
     }

     public function resolve(int $id, Request $request): JsonResponse
     {
          $user = Auth::user();
          $userId = $user->id;
          $request->validate([
               'status' => 'required|string|in:Completed,Cancelled',
          ]);

          try {
               $appointment = $this->appointmentService->resolveAppointment(
                    $userId,
                    $id,
                    $request->status
               );
               return response()->json([
                    'message' => 'Appointment resolved successfully',
                    'data' => $appointment,
               ], 200);
          } catch (\Exception $e) {
               return response()->json([
                    'message' => 'Failed to resolve appointment',
                    'error' => $e->getMessage(),
               ], 400);
          }
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

     public function getAgents()
     {
          $agents = User::where('role_id', 2)->get();
          return response()->json($agents);
     }

     public function simulatedAppointments(CreateSimulatedRequest $request)
     {
          $agentId = Auth::user()->id;
          //  dd($agentId);
          $date = $request->date;
          $time = $request->time;
          $name = $request->name;
          $simulatedAppointments = $this->appointmentService->simulateAppointment($name, $date, $time, $agentId);
          return response()->json($simulatedAppointments);
     }

     public function getSimulatedAppointments()
     {
          $agentId = Auth::user()->id;
          $simulatedAppointments = $this->appointmentService->getSimulatedAppointments($agentId);
          return response()->json($simulatedAppointments);
     }

     public function resolveSimulatedAppointment(int $appointmentId, Request $request)
     {
          $request->validate([
               'status' => 'required|string|in:Completed,Cancelled',
          ]);

          try {
               $appointment = $this->appointmentService->resolveSimulatedAppointment(
                    $appointmentId,
                    $request->status
               );
               return response()->json([
                    'message' => 'Appointment resolved successfully',
                    'data' => $appointment,
               ], 200);
          } catch (\Exception $e) {
               return response()->json([
                    'message' => 'Failed to resolve appointment',
                    'error' => $e->getMessage(),
               ], 400);
          }
     }
}
