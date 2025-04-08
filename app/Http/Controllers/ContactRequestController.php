<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateContactRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\Console\Descriptor\ReStructuredTextDescriptor;

class ContactRequestController extends Controller
{
    // create, resolve, getMyRequests
    protected $contactService;

    public function __construct($contactService)
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

        $contactRequest = $this->contactService->CreateContactRequest(
            $client->id,
            $request->agent_id,
            $request->message
        );

        return response()->json([
            'message' => 'Contact request created successfully',
            'contact_request' => $contactRequest,
        ], 201);
    }

    public function resolve()
    {

    }

    public function getMyRequests()
    {

    }
}
