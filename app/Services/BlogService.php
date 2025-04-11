<?php

namespace App\Services;

use App\Http\Requests\AddBlogPostRequest;
use App\Http\Requests\AddCommentRequest;
use App\Http\Requests\ReactToPostRequest;
use App\Http\Requests\RemoveCommentRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Models\BlogComments;
use App\Models\BlogPost;
use App\Services\Interfaces\IBlogService;
use Illuminate\Support\Collection;

class BlogService implements IBlogService
{
    /**
     * Summary of all
     * @return BlogPost[]
     */
    public function all(): Collection
    {
        return BlogPost::with('comments', 'reactions')->get();
    }

    /**
     * Summary of find
     * @param int $id
     * @return BlogPost
     */
    public function find(int $id)
    {
        $blogpost = BlogPost::with('comments', 'reactions')->findOrFail($id); 
        return $blogpost;
    }

    /**
     * Summary of create
     * @param AddBlogPostRequest $request
     * @return BlogPost
     */
    public function create($request)
    {
        $blogpost = BlogPost::create($request->validated());
        return $blogpost;
    }

    /**
     * Summary of update
     * @param int $id
     * @param UpdateBlogPostRequest $request
     * @return BlogPost
     */
    public function update(int $id, $request)
    {
        $blogpost = BlogPost::findOrFail($id);
        $blogpost->update($request->validated());

        return $blogpost;
    }

    /**
     * Summary of delete
     * @param int $id
     * @return bool
     */
    public function delete(int $id)
    {
        $blogpost = BlogPost::findOrFail($id);
        return $blogpost->delete();
    }

    /**
     * Summary of addComment
     *
     * @param int $userId
     * @param AddCommentRequest $request
     * @return BlogComments
     */
    public function addComment($userId, $request)
    {
        $post = BlogPost::where('id', $request->post_id)->where('status', 'pblished')->findOrFail();

        return BlogComments::create([
            'user_id' => $userId,
            'post_id' => $request->post_id,
            'comment' => $request->comment
        ]);
    }

    /**
     * Summary of removeComment
     * @param RemoveCommentRequest $request
     * @return void
     */
    public function removeComment($request)
    {
        // Implementation for removing a comment
    }

    /**
     * Summary of reactToPost
     * @param int $userId
     * @param ReactToPostRequest $request
     * @return void
     */
    public function reactToPost($userId, $request)
    {
        // Implementation for reacting to a post
    }
}