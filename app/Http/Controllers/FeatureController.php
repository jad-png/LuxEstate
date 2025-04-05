<?php

namespace App\Http\Controllers;

use App\Models\Feature;
use App\Services\Interfaces\IFeaturesService;
use Illuminate\Http\Request;

class FeatureController extends Controller
{

    protected $featureService;

    public function __construct (IFeaturesService $featuresService) 
    {
        $this->featureService = $featuresService;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Feature $feature)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feature $feature)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feature $feature)
    {
        //
    }
}
