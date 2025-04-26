<?php

namespace App\Services;

use App\Models\BlogCategory;
use App\Http\Requests\AddBlogCategorieRequest;
use App\Http\Requests\UpdateBlogCategorieRequest;

class BlogCategoryService
{
    /**
     * Fetch all blog categories.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all()
    {
        return BlogCategory::all();
    }

    /**
     * Find a blog category by ID.
     *
     * @param int $id
     * @return BlogCategory|null
     */
    public function find(int $id)
    {
        return BlogCategory::findOrFail($id);
    }

    /**
     * Create a new blog category.
     *
     * @param AddBlogCategorieRequest $request
     * @return BlogCategory
     */
    public function create(AddBlogCategorieRequest $request)
    {
        return BlogCategory::create($request->validated());
    }

    /**
     * Update an existing blog category.
     *
     * @param int $id
     * @param UpdateBlogCategorieRequest $request
     * @return BlogCategory
     */
    public function update(int $id, UpdateBlogCategorieRequest $request)
    {
        $category = BlogCategory::findOrFail($id);
        $category->update($request->validated());
        return $category;
    }

    /**
     * Delete a blog category.
     *
     * @param int $id
     * @return void
     */
    public function delete(int $id)
    {
        $category = BlogCategory::findOrFail($id);
        $category->delete();
    }
}