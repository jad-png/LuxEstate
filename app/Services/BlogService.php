<?php

namespace App\Services;

use App\Http\Requests\AddBlogPostRequest;
use App\Http\Requests\AddCommentRequest;
use App\Http\Requests\ReactToPostRequest;
use App\Http\Requests\RemoveCommentRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Models\BlogComment;
use App\Models\BlogPost;
use App\Models\BlogReactions;
use App\Models\User;
use App\Services\Interfaces\IBlogService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;

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
     * @param mixed $request
     * @return void
     */
    public function create($request){}
    /**
     * Summary of create
     * @param int $userId
     * @param AddBlogPostRequest $request
     * @return BlogPost
     */
    public function createBlogPost($userId, $request)
    {
        $user = User::findOrFail($userId);

        $blogpost = BlogPost::create([
            'user_id'=> $user->id,
            'title' => $request['title'],
            'content' => $request['content'],
        ]);

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
     * @return BlogComment
     */
    public function addComment($userId, $request)
    {
        $user = User::findOrFail($userId);
        $post = BlogPost::where('status', 'Published')->findOrFail($request->blog_post_id);
        // dd($post, $request->blog_post_id);
        return BlogComment::create([
            'user_id' => $user->id,
            'blog_post_id' => $post->id,
            'comment' => $request->comment
        ]);
    }

    /**
     * Summary of removeComment
     * @param int $userId
     * @param RemoveCommentRequest $request
     * @return bool
     */
    public function removeComment($userId, $request)
    {
        $user = User::findOrFail($userId);

        $comment = BlogComment::where('id', $request->comment_id)
            ->where('blog_post_id', $request->blog_post_id)
            ->where('user_id', $user->id)
            ->firstOrFail();

        if ($user->id !== $comment->user_id && !$user->hasRole('admin')) {
            throw new AuthorizationException('You are not authorized to delete this comment.');
        }
        
        return $comment->delete();
    }

    /**
     * Summary of reactToPost
     * @param int $userId
     * @param ReactToPostRequest $request
     * @return BlogReactions
     */
    public function reactToPost($userId, $request)
    {
        $post = BlogPost::where('id', $request->post_id)->where('status', 'published')->firstOrFail();

        // delete existing reaction if it exists
        BlogReactions::where('user_id', $userId)->where('blog_post_id', $request->post_id)->delete();
        
        return BlogReactions::create([
            'user_id' => $userId,
            'blog_post_id' => $request->post_id,
            'reaction' => $request->reaction
        ]);
    }
}