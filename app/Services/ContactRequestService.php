<?php

namespace App\Services;

use App\Models\ContactRequest;
use App\Services\Interfaces\IContactRequestService;
use Illuminate\Database\Eloquent\Collection;

class ContactRequestService implements IContactRequestService
{
    /**
     * Summary of createRequest
     * @param int $clientId
     * @param int $agentId
     * @param string $message
     * @return ContactRequest
     */
    public function createRequest($clientId, $agentId, $message)
    {
        // Logic to create a contact request
    }

    /**
     * Summary of resolveRequest
     * @param int $requestId
     * @return ContactRequest
     */
    public function resolveRequest($requestId)
    {
        // Logic to resolve a contact request
    }

    /**
     * Summary of getClientRequests
     * @param int $clientId
     * @return Collection
     */
    public function getClientRequests($clientId)
    {
        // Logic to get all requests for a client
    }

    /**
     * Summary of getAgentRequests
     * @param int $agentId
     * @return Collection
     */
    public function getAgentRequests($agentId)
    {
        // Logic to get all requests for an agent
    }
}