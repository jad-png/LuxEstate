<?php 

namespace App\Services\Interfaces;

use App\Models\ContactRequest;
use Illuminate\Database\Eloquent\Collection;

interface IContactRequestService
{
    /**
     * Summary of createRequest
     * @param int $clientId
     * @param int $agentId
     * @param string $message
     * @return ContactRequest
     */
    public function createRequest($clientId, $agentId, $message);

    /**
     * Summary of resolveRequest
     * @param int $requestId
     * @return ContactRequest
     */
    public function resolveRequest($requestId);

    /**
     * Summary of getClientRequests
     * @param int $clientId
     * @return Collection
     */
    public function getClientRequests($clientId);

    /**
     * Summary of getAgentRequests
     * @param int $agentId
     * @return Collection
     */
    public function getAgentRequests($agentId);
}