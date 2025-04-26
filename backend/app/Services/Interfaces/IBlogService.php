<?php 

namespace App\Services\Interfaces;

use App\Http\Requests\AddBlogPostRequest;
use App\Http\Requests\AddCommentRequest;
use App\Http\Requests\ReactToPostRequest;
use App\Http\Requests\RemoveCommentRequest;
use App\Http\Requests\SharePostRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Http\Requests\UpdateFeatureRequest;
use App\Models\BlogComment;
use App\Models\BlogComments;
use App\Models\BlogPost;
use App\Models\BlogReactions;
use Illuminate\Pagination\LengthAwarePaginator;

interface IBlogService extends CrudInterface
{
    public function paginatedPosts();
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
     * @return BlogComment
     */
    public function addComment($userId, $request);

    /**
     * Summary of removeComment
     * @param int $userId
     * @param RemoveCommentRequest $request
     * @return bool
     */
    public function removeComment($userId, $request);

    /**
     * Summary of reactToPost
     * @param int $userId
     * @param ReactToPostRequest $request
     * @return BlogReactions
     */
    public function reactToPost($userId, $request);

    /**
     * Summary of sharePost
     * @param int $userId
     * @param SharePostRequest $request
     * @return array
     */
    public function sharePost($userId, $request);


    /**
     * Summary of getByCategory
     * @param int $categoryId
     * @return LengthAwarePaginator
     */
    public function getByCategory($categoryId);
}