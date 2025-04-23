<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Services\CategoryService;
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
        $category = $this->categoryService->create($request->name);
        return response()->json($category);
    }

    public function update($id, UpdateCategoryRequest $request)
    {
        $category = $this->categoryService->find($id, $request);
        return response()->json($category);
    }

    public function destroy($id)
    {
        $category = $this->categoryService->find($id);
        return response()->json($category);
    }
}
