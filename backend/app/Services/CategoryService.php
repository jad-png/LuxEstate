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
        return Category::create($request->validated());
    }
    
    /**
     * Summary of update
     * @param int $id
     * @param UpdateCategoryRequest $request
     * @return Category
     */
    public function update(int $id, $request) {
        $category = $this->find($id);
        $category->update($request->validated());
        return $category;
    }   

    /**
     * Summary of delete
     * @param int $id
     * @return bool
     */
    public function delete(int $id) {
        $category = $this->find($id);
        return $category->delete();
    }
}