<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\AddBlogPostRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Http\Requests\UpdateFeatureRequest;
use App\Models\BlogComments;
use App\Models\BlogPost;
use App\Models\BlogReactions;

interface IBlogService extends CrudInterface
{
    /**
     * Summary of createBlogPost
     * @param AddBlogPostRequest $request
     * @return BlogPost
     */
    public function create($request);
    
    /**
     * Summary of getBlogPost
     * @param UpdateBlogPostRequest $request
     * @return BlogPost
     */
    public function update(int $id, $request);

    
}