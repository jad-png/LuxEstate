<?php 

namespace App\Services\Interfaces;

use Illuminate\Http\Request;

interface ISearchService 
{
    public function search(Request $request);
}