<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateContactRequest;
use App\Http\Requests\ResolveContactRequest;
use App\Services\Interfaces\IContactRequestService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactRequestController extends Controller
{
    // create, resolve, getMyRequests
    protected $contactService;

    public function __construct(IContactRequestService $contactService)
    {
        $this->contactService = $contactService;
    }

    /**
     * Summary of create
     * @param CreateContactRequest $request
     * @return JsonResponse
     */
    public function create(CreateContactRequest $request)
    {
        $client = Auth::user();

        $contactRequest = $this->contactService->createRequest(
            $client->id,
            $request->agent_id,
            $request->message
        );


        return response()->json([
            'message' => 'Contact request created successfully',
            'contact_request' => $contactRequest,
        ], 201);
    }

    /**
     * @param ResolveContactRequest $request
     * @return JsonResponse
     */
    public function resolve(ResolveContactRequest $request)
    {
        $contactRequest = $this->contactService->resolveRequest($request->request_id);

        return response()->json([
            'message' => 'Contact request resolved successfully',
            'contact_request' => $contactRequest,
        ], 200);
    }
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getMyRequests()
    {
        $user = Auth::user();
        $contactRequests = $user->isClient()
            ? $this->contactService->getClientRequests($user->id)
            : $this->contactService->getAgentRequests($user->id);

            return response()->json([
                    'message'=> 'Contact requests retrieved successfully',
                    'contact_requests' => $contactRequests,
                ], 200);
    }
}
