<?php

namespace App\Services;

use App\Http\Requests\CreateVisitRequest;
use App\Http\Requests\UpdateVisitRequest;
use App\Models\Property;
use App\Models\VisitRequest;
use App\Models\User;
use App\Services\Contracts\IVisitRequestService;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use InvalidArgumentException;

class VisitRequestService implements IVisitRequestService
{
    /**
     * Create a new visit request.
     * @param int $clientId
     * @param CreateVisitRequest $request
     * @return VisitRequest
     */
    public function createRequest(int $clientId, CreateVisitRequest $request): VisitRequest
    {
        $client = User::with(['role'])->where('id', $clientId)->firstOrFail();
        $property = Property::findOrFail($request->property_id);

        return VisitRequest::create([
            'client_id' => $client->id,
            'property_id' => $property->id,
            'date' => $request->date,
            'time' => $request->time,
            'status' => 'pending',
        ]);
    }

    /**
     * Update the status of a visit request.
     *
     * @param UpdateVisitRequest $request
     * @return VisitRequest
     */
    public function updateStatus(int $agentId, int $visitRequestId, UpdateVisitRequest $request): VisitRequest
    {
        $agent = User::with(['role'])->where('id', $agentId)->firstOrFail();
        $visitRequest = VisitRequest::findOrFail($visitRequestId);


        $visitRequest->update($request->status);

        return $visitRequest;
    }
}