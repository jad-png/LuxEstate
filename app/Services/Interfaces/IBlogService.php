<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\AddBlogPostRequest;
use App\Http\Requests\AddCommentRequest;
use App\Http\Requests\ReactToPostRequest;
use App\Http\Requests\RemoveCommentRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Http\Requests\UpdateFeatureRequest;
use App\Models\BlogComments;
use App\Models\BlogPost;
use App\Models\BlogReactions;

interface IBlogService extends CrudInterface
{
    /**
     * Summary of createBlogPost
     * @param int $userId
     * @param AddBlogPostRequest $request
     * @return BlogPost
     */
    public function createBlogPost($userId, $request);
    
    /**
     * Summary of getBlogPost
     * @param UpdateBlogPostRequest $request
     * @return BlogPost
     */
    public function update(int $id, $request);

    /**
     * Summary of addComment
     * @param int $userId
     * @param AddCommentRequest $request
     * @return BlogComments
     */
    public function addComment($userId, $request);

    /**
     * Summary of removeComment
     * @param RemoveCommentRequest $request
     * @return bool
     */
    public function removeComment($request);

    /**
     * Summary of reactToPost
     * @param int $userId
     * @param ReactToPostRequest $request
     * @return BlogReactions
     */
    public function reactToPost($userId, $request);
}