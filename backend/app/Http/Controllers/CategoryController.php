<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Services\CategoryService;
use Exception;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    protected $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        $categories = $this->categoryService->all();
        return response()->json($categories);
    }

    public function show($id)
    {
        $category = $this->categoryService->find($id);
        return response()->json($category);
    }

    public function store(AddCategoryRequest $request)
    {
        $category = $this->categoryService->create($request->validated());
        return response()->json($category);
    }

    public function update(AddCategoryRequest $request, $id)
    {
        try {
            $category = $this->categoryService->update($id, $request->validated());
            return response()->json(['data' => $category, 'message' => 'Category updated successfully'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $this->categoryService->delete($id);
            return response()->json(['message' => 'Category deleted successfully'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
