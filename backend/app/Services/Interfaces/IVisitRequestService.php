<?php

namespace App\Services\Interfaces;

use App\Http\Requests\CreateVisitRequest;
use App\Http\Requests\UpdateVisitRequest;
use App\Models\VisitRequest;

interface IVisitRequestService
{
    public function all();
    /**
     * Create a new visit request.
     * @param int $clientId
     * @param CreateVisitRequest $request
     * @return VisitRequest
     */
    public function createRequest(int $clientId, CreateVisitRequest $request): VisitRequest;

    /**
     * Update the status of a visit request.
     *
     * @param UpdateVisitRequest $request
     * @return VisitRequest
     */
    public function updateStatus(int $agentId, int $visitRequestId, UpdateVisitRequest $request): VisitRequest;
}