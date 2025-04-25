<?php

namespace App\Services\Interfaces;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use Illuminate\Database\Eloquent\Collection;

interface IBlogCategoryService extends CrudInterface
{
    /**
     * Summary of create
     * @param mixed $request
     * @return BlogCategory
     */
    public function create($request);

    /**
     * Summary of update
     * @param int $id
     * @param mixed $request
     * @return BlogCategory
     */
    public function update($id, $request);

    /**
     * Summary of getByCategory
     * @param int $categoryId
     * @param mixed $request
     * @return Collection
     */
    public function getByCategory($categoryId, $request);
}