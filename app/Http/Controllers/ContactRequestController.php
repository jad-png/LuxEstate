<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactRequestController extends Controller
{
    // create, resolve, getMyRequests
    protected $contactService;

    public function __construct($contactService)
    {
        $this->contactService = $contactService;
    }

    public function create()
    {

    }

    public function resolve()
    {

    }

    public function getMyRequests()
    {
        
    }
}
