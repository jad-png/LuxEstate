<?php

namespace App\Services;

use App\Models\ContactRequest;
use App\Models\User;
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
        // $client = User::where('id', $clientId)->whereHas('role', fn($q) => $q->where('id', 3))->firstOrFail();
        $client = User::with('role')->where('id', $clientId)->firstOrFail();
        $agent = User::with(['role'])->where('id', $agentId)->firstOrFail();
        return ContactRequest::create([
            'client_id' => $client->id,
            'agent_id' => $agent->id,
            'message' => $message,
            'status' => 'pending',
        ]);
    }

    /**
     * Summary of resolveRequest
     * @param int $requestId
     * @return ContactRequest
     */
    public function resolveRequest($requestId)
    {
        $request = ContactRequest::findOrFail($requestId);
        $request->update(['status' => 'resolved']);
        return $request->fresh();
    }

    /**
     * Summary of getClientRequests
     * @param int $clientId
     * @return Collection
     */
    public function getClientRequests($clientId)
    {
        return ContactRequest::where('client_id', $clientId)->with('agent')->get();
    }

    /**
     * Summary of getAgentRequests
     * @param int $agentId
     * @return Collection
     */
    public function getAgentRequests($agentId)
    {
        return ContactRequest::where('agent_id', $agentId)->with('client')->get();
    }
}