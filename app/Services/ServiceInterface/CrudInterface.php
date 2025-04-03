<?php

namespace App\Services\Interfaces;

interface CrudInterface
{
    public function create($request);
    public function find(int $id);
    public function update(int $id, $request);
    public function delete(int $id);
    public function all();
}