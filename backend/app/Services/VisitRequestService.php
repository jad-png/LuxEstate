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
     *
     * @param CreateVisitRequest $request
     * @return VisitRequest
     */
    public function createRequest(CreateVisitRequest $request): VisitRequest
    {
        // Validate client (role ID 3)
        $client = User::where('id', $clientId)
            ->whereHas('role', fn($q) => $q->where('id', 3))
            ->firstOrFail();

        // Validate property exists
        $property = Property::findOrFail($propertyId);

        // Validate date and time
        $validator = Validator::make([
            'date' => $date,
            'time' => $time,
        ], [
            'date' => 'required|date|after_or_equal:today',
            'time' => 'required|date_format:H:i',
        ]);

        if ($validator->fails()) {
            throw new InvalidArgumentException($validator->errors()->first());
        }

        return VisitRequest::create([
            'client_id' => $client->id,
            'property_id' => $property->id,
            'date' => $date,
            'time' => $time,
            'status' => 'pending',
        ]);
    }

    /**
     * Update the status of a visit request.
     *
     * @param UpdateVisitRequest $request
     * @return VisitRequest
     */
    public function updateStatus(UpdateVisitRequest $request): VisitRequest
    {
        // Validate agent (role ID 2)
        $agent = User::where('id', $agentId)
            ->whereHas('role', fn($q) => $q->where('id', 2))
            ->firstOrFail();

        // Validate visit request
        $visitRequest = VisitRequest::findOrFail($visitRequestId);

        // Validate status
        $validator = Validator::make(['status' => $status], [
            'status' => ['required', Rule::in(['pending', 'confirmed', 'cancelled'])],
        ]);

        if ($validator->fails()) {
            throw new InvalidArgumentException($validator->errors()->first());
        }

        $visitRequest->update(['status' => $status]);

        return $visitRequest;
    }
}