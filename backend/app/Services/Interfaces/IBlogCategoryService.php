<?php

namespace App\Services\Interfaces;

use App\Http\Requests\AddBlogCategorieRequest;
use App\Http\Requests\UpdateBlogCategorieRequest;
use App\Models\BlogCategory;
use App\Models\BlogPost;
use Illuminate\Database\Eloquent\Collection;

interface IBlogCategoryService extends CrudInterface
{
    /**
     * Summary of create
     * @param AddBlogCategorieRequest $request
     * @return BlogCategory
     */
    public function create($request);

    /**
     * Summary of update
     * @param int $id
     * @param UpdateBlogCategorieRequest $request
     * @return BlogCategory
     */
    public function update($id, $request);
}