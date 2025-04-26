<?php

namespace App\Http\Controllers;

use App\Services\BlogCategoryService;
use App\Http\Requests\AddBlogCategorieRequest;
use App\Http\Requests\UpdateBlogCategorieRequest;
use Illuminate\Http\JsonResponse;

class BlogCategoryController extends Controller
{
    protected $blogCategoryService;

    public function __construct(BlogCategoryService $blogCategoryService)
    {
        $this->blogCategoryService = $blogCategoryService;
    }

    /**
     * Display a listing of blog categories.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $categories = $this->blogCategoryService->all();
        return response()->json($categories, 200);
    }

    /**
     * Display a specific blog category.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $category = $this->blogCategoryService->find($id);
        return response()->json($category, 200);
    }

    /**
     * Store a new blog category.
     *
     * @param AddBlogCategorieRequest $request
     * @return JsonResponse
     */
    public function store(AddBlogCategorieRequest $request): JsonResponse
    {
        $category = $this->blogCategoryService->create($request);
        return response()->json($category, 201);
    }

    /**
     * Update an existing blog category.
     *
     * @param int $id
     * @param UpdateBlogCategorieRequest $request
     * @return JsonResponse
     */
    public function update(int $id, UpdateBlogCategorieRequest $request): JsonResponse
    {
        $category = $this->blogCategoryService->update($id, $request);
        return response()->json($category, 200);
    }

    /**
     * Delete a blog category.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $this->blogCategoryService->delete($id);
        return response()->json(null, 204);
    }
}