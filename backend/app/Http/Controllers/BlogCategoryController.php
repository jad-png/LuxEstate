<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddBlogCategorieRequest;
use App\Http\Requests\UpdateBlogCategorieRequest;
use App\Services\Interfaces\IBlogCategoryService;
use Illuminate\Http\Request;

class BlogCategoryController extends Controller
{
    protected $categoryService;

    public function __construct(IBlogCategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index() {
        $categories = $this->categoryService->all();

        return response()->json([
            'categories' => $categories
        ]);
    }


    public function show($id) {
        $category = $this->categoryService->find($id);
        return response()->json([
            'category' => $category
        ]);   
    }

    public function create(AddBlogCategorieRequest $request) {
        $category = $this->categoryService->create($request->validated());
        
        return response()->json([
            'message' => 'category created successfully',
            'category' => $category
        ]);
    }

    public function update($id, UpdateBlogCategorieRequest $request)
    {
        $category = $this->categoryService->update($id, $request->validated);

        return response()->json([
            'message' => 'category updated success',
            'category' => $category
        ]);
    }

    public function delete(int $id)
    {
        $this->categoryService->delete($id);

        return response()->json([
            'message' => 'categorie deleted with success'
        ]);
    }
}
