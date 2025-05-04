<?php 

namespace App\Services;

use App\Models\BlogCategory;
use App\Models\BlogPost;
use App\Models\Category;
use App\Models\Property;
use App\Services\Interfaces\ISearchService;
use Illuminate\Http\Request;

class SearchService implements ISearchService
{
    public function search(Request $request)
    {
        $query = $request->input('query');
        $results = [];

        if ($query) {
            $properties = Property::where('title', 'ilike', '%' . $query . '%')
                ->orWhere('description', 'ilike', '%' . $query . '%')
                ->orWhere('price', 'ilike', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($property) {
                    return [
                        'type' => 'property',
                        'title' => $property->title,
                        'url' => "/property/{$property->id}",
                    ];
                });

            
            $blogPosts = BlogPost::where('title', 'ilike', '%' . $query . '%')
                ->orWhere('content', 'ilike', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($post) {
                    return [
                        'type' => 'blog_post',
                        'title' => $post->title,
                        'url' =>  "/post/{$post->id}",
                    ];
                });

            $blogPostCategories = BlogCategory::where('name', 'ilike', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($category) {
                    return [
                        'type' => 'blog_post_category',
                        'title' => $category->name,
                        'url' => "/blog/category/{$category->id}",
                    ];
                });

            $propertyCategories = Category::where('name', 'ilike', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($category) {
                    return [
                        'type' => 'property_category',
                        'title' => $category->name,
                        'url' => "/properties-category/{$category->id}",
                    ];
                });

            $results = $properties
                ->merge($blogPosts)
                ->merge($blogPostCategories)
                ->merge($propertyCategories)
                ->take(10)
                ->toArray();
        }

        return $results;
    }
}