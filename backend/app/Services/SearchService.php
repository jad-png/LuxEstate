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
            $properties = Property::where('title', 'like', '%' . $query . '%')
                ->orWhere('description', 'like', '%' . $query . '%')
                ->orWhere('address', 'like', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($property) {
                    return [
                        'type' => 'property',
                        'title' => $property->title,
                        'url' => route('properties.show', $property->id),
                    ];
                });

            
            $blogPosts = BlogPost::where('title', 'like', '%' . $query . '%')
                ->orWhere('content', 'like', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($post) {
                    return [
                        'type' => 'blog_post',
                        'title' => $post->title,
                        'url' => route('blog.show', $post->id),
                    ];
                });

            $blogPostCategories = BlogCategory::where('name', 'like', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($category) {
                    return [
                        'type' => 'blog_post_category',
                        'title' => $category->name,
                        'url' => route('blog_post_categories.show', $category->id),
                    ];
                });

            $propertyCategories = Category::where('name', 'like', '%' . $query . '%')
                ->take(5)
                ->get()
                ->map(function ($category) {
                    return [
                        'type' => 'property_category',
                        'title' => $category->name,
                        'url' => route('property_categories.show', $category->id),
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