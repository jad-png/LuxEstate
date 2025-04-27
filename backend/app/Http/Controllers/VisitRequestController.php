<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVisitRequest;
use App\Http\Requests\UpdateVisitRequest;
use App\Services\Interfaces\IVisitRequestService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Event\ResponseEvent;

class VisitRequestController extends Controller
{
    protected $visitRequestService;

    public function __construct(IVisitRequestService $iVisitRequestService)
    {
        $this->visitRequestService = $iVisitRequestService;
    }

    public function store(CreateVisitRequest $request)
    {
        $user = Auth::user();
        $userId = $user->id;

        $visitRequest = $this->visitRequestService->createRequest($userId, request: $request);

        return response()->json($visitRequest);
    }

    public function update(int $id, UpdateVisitRequest $request)
    {
        $user = Auth::user();
        $userId = $user->id;

        $visitRequest = $this->visitRequestService->updateStatus($userId, $id, $request);

        return response()->json($visitRequest);
    }
}
