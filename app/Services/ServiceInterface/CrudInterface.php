<?php

namespace App\Services\Interfaces;

interface CrudInterface
{
    public function create(array $data);
    public function find(int $id);
    public function update(int $id, array $data);
    public function delete(int $id);
    public function all();
}