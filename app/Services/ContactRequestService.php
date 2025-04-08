<?php

namespace App\Services;

use App\Services\Interfaces\IContactRequestService;

class ContactRequestService implements IContactRequestService
{
    public function createRequest($clientId, $agentId, $message)
    {
        // Logic to create a contact request
    }

    public function resolveRequest($requestId)
    {
        // Logic to resolve a contact request
    }

    public function getClientRequests($clientId)
    {
        // Logic to get all requests for a client
    }

    public function getAgentRequests($agentId)
    {
        // Logic to get all requests for an agent
    }
}