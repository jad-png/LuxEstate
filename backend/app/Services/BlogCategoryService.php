<?php

namespace App\Services;

use App\Http\Requests\AddBlogCategorieRequest;
use App\Http\Requests\UpdateBlogCategorieRequest;
use App\Models\BlogCategory;

class BlogCategoryService 
{
    public function all() 
    {
        return BlogCategory::all();
    }

    public function find(int $id)
    {
        $category = BlogCategory::find($id);
        return $category;
    }

    /**
     * Creating new Categorie
     * @param AddBlogCategorieRequest $request
     * @return BlogCategory
     */
    public function create($request) 
    {
        $category = BlogCategory::create($request);

        return $category;
    }

    /**
     * Update a Category
     * @param int $id
     * @param UpdateBlogCategorieRequest $request
     * @return BlogCategory
     */
    public function update($id, $request)
    {
        $category = BlogCategory::find($id);
        $category->update($request);
        return $category;
    }

    public function delete(int $id) 
    {
        $category = BlogCategory::find($id);
        $category->delete();
    }
}