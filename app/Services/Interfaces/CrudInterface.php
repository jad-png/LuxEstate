<?php

namespace App\Services\Interfaces;

use App\Http\Requests\UpdatePropertyRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Request;


interface CrudInterface
{
    /**
     * @param FormRequest $request
     * @return mixed
     */
    public function create($request);
    public function find(int $id);

    /**
     * @param int $id
     * @param UpdatePropertyRequest $request
     * @return void
     */
    public function update(int $id, $request);
    public function delete(int $id);
    public function all();
}