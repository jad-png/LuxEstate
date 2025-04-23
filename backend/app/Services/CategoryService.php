<?php 

namespace App\Services;

use App\Http\Requests\AddCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\Interfaces\CrudInterface;
use Illuminate\Database\Eloquent\Collection;

class CategoryService implements CrudInterface
{
    /**
     * Summary of all
     * @return Collection
     */
    public function all() {
        return Category::all();
    }

    /**
     * Summary of find
     * @param int $id
     * @return Category
     */
    public function find($id) {
        return Category::find($id);
    }

    
    /**
     * Summary of create
     * @param AddCategoryRequest $request
     * @return Category
     */
    public function create($request) {
        return Category::create($request);
    }
    
    /**
     * Summary of update
     * @param int $id
     * @param UpdateCategoryRequest $request
     * @return Category
     */
    public function update(int $id, $request) {
        $category = Category::findOrFail($id);
        $category->update($request);
        return $category;
    }   

    /**
     * Summary of delete
     * @param int $id
     * @return bool
     */
    public function delete(int $id) {
        $category = Category::findOrFail($id);
        return $category->delete();
    }
}