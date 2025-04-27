<?php

namespace App\Services\Contracts;

use App\Http\Requests\CreateVisitRequest;
use App\Http\Requests\UpdateVisitRequest;
use App\Models\VisitRequest;

interface IVisitRequestService
{
    /**
     * Create a new visit request.
     *
     * @param CreateVisitRequest $request
     * @return VisitRequest
     */
    public function createRequest(CreateVisitRequest $request): VisitRequest;

    /**
     * Update the status of a visit request.
     *
     * @param UpdateVisitRequest $request
     * @return VisitRequest
     */
    public function updateStatus(UpdateVisitRequest $request): VisitRequest;
}