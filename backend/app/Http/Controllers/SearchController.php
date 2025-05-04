<?php

namespace App\Http\Controllers;

use App\Services\Interfaces\ISearchService;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    protected $searchService;

    public function __construct(ISearchService $searchService)
    {
        $this->searchService = $searchService;
    }

    public function search (Request $request)
    {
        $search = $this->searchService->search($request);
        
        return response()->json($search); 
    }
}
