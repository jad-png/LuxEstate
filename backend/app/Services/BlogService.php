<?php

namespace App\Services;

use App\Http\Requests\AddBlogPostRequest;
use App\Http\Requests\AddCommentRequest;
use App\Http\Requests\ReactToPostRequest;
use App\Http\Requests\RemoveCommentRequest;
use App\Http\Requests\SharePostRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Models\BlogComment;
use App\Models\BlogPost;
use App\Models\BlogReactions;
use App\Models\BlogShare;
use App\Models\User;
use App\Services\Interfaces\IBlogService;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use InvalidArgumentException;

class BlogService implements IBlogService
{
    public function all()
    {
        return BlogPost::with('comments', 'reactions', 'category', 'user')->get();
    }

    public function paginatedPosts()
    {
        return BlogPost::with('comments', 'reactions', 'category', 'user')->paginate(5);
    }

    /**
     * Summary of find
     * @param int $id
     * @return BlogPost
     */
    public function find(int $id)
    {
        $blogpost = BlogPost::with('comments', 'reactions', 'category')->findOrFail($id);
        return $blogpost;
    }

    /**
     * Summary of create
     * @param mixed $request
     * @return void
     */
    public function create($request) {}

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
            'user_id' => $user->id,
            'title' => $request['title'],
            'content' => $request['content'],
            'category_id' => $request['category_id']
        ]);

        // dd($request);
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
        $post = BlogPost::where('id', $request->blog_post_id)
            ->where('status', 'Published')
            ->first();
        return BlogComment::create([
            'user_id' => $user->id,
            'blog_post_id' => $post->id,
            'comment' => $request->comment,
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
        $post = BlogPost::where('status', 'Published')
            ->findOrFail($request->blog_post_id);
        // dd('hello');

        // delete existing reaction if it exists
        BlogReactions::where('user_id', $userId)
            ->where('blog_post_id', $request->blog_post_id)
            ->delete();
        return BlogReactions::create([
            'user_id' => $userId,
            'blog_post_id' => $post->id,
            'reaction_type' => $request->reaction
        ]);
    }

    /**
     * Summary of sharePost
     * @param int $userId
     * @param SharePostRequest $request
     * @return array
     */
    public function sharePost($userId, $request)
    {
        $user = User::findOrFail($userId);
        $post = BlogPost::where('status', 'Published')->findOrFail($request->blog_post_id);

        $postUrl = route('blog.show', $post->id);
        $title = $post->title;

        $sharedUrls = [
            'twitter' => "https://twitter.com/intent/tweet?url=" . urlencode($postUrl) . "&text=" . urlencode($title),
            'facebook' => "https://www.facebook.com/sharer/sharer.php?u=" . urlencode($postUrl),
            'linkedin' => "https://www.linkedin.com/sharing/share-offsite/?url=" . urlencode($postUrl),
            'whatsapp' => "https://web.whatsapp.com/send?text=" . urlencode($title . ' ' . $postUrl),
            'instagram' => urlencode($postUrl)
        ];

        if (!array_key_exists($request->platform, $sharedUrls)) {
            throw new InvalidArgumentException("Share platform not supported : $request->platform");
        }

        BlogShare::create([
            'blog_post_id' => $post->id,
            'user_id' => $user->id,
            'platform' => $request->platform,
        ]);

        return [
            'share_url' => $sharedUrls[$request->platform],
            'post' => $post,
        ];
    }

    /**
     * Summary of getByCategory
     * @param int $categoryId
     * @return LengthAwarePaginator
     */
    public function getByCategory($categoryId)
    {
        $posts = BlogPost::with('category')
            ->where('category_id', $categoryId)
            ->paginate(5);
        return $posts;
    }
}
