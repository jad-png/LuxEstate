<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddBlogPostRequest;
use App\Http\Requests\AddCommentRequest;
use App\Http\Requests\ReactToPostRequest;
use App\Http\Requests\RemoveCommentRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use App\Services\Interfaces\IBlogService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BlogPostController extends Controller
{
    protected $blogPostService;

    public function __construct(IBlogService $blogPostService)
    {
        $this->blogPostService = $blogPostService;
    }

    public function index()
    {
        $posts = $this->blogPostService->all();

        return response()->json($posts);
    }

    public function show(int $id)
    {
        $post = $this->blogPostService->find($id);

        return response()->json([
            'message' => 'Post retrieved successfully',
            'post' => $post,
        ]);
    }

    public function store(AddBlogPostRequest $request)
    {
        $user = Auth::user();
        $userId = $user->id;
        // $mergedAtt = $request->merge(['user_id' => $user->id]);
        // dd($request->all());
        // dd($request->validated(), $userId);

        $post = $this->blogPostService->createBlogPost($userId, $request->validated());

        return response()->json([
            'message' => 'Post created successfully',
            'post' => $post,
        ]);
    }

    public function update(int $id, UpdateBlogPostRequest $request)
    {
        $post = $this->blogPostService->update($id, $request);

        return response()->json([
            'message' => 'Post updated successfully',
            'post' => $post,
        ]);
    }

    public function destroy(int $id)
    {
        $this->blogPostService->delete($id);

        return response()->json([
            'message' => 'Post deleted successfully',
        ]);
    }

    public function comment(AddCommentRequest $request)
    {
        $user = Auth::user();
        $comment = $this->blogPostService->addComment($user->id, $request);

        return response()->json([
            'message' => 'Comment added successfully',
            'comment' => $comment,
        ]);
    }

    public function removeComment(RemoveCommentRequest $request)
    {
        $this->blogPostService->removeComment($request);

        return response()->json([
            'message' => 'Comment removed successfully',
        ]);
    }

    public function react(ReactToPostRequest $request)
    {
        $user = Auth::user();
        $reaction = $this->blogPostService->reactToPost($user->id, $request);
        
        return response()->json([
            'message' => 'Reaction added successfully',
            'reaction' => $reaction,
        ]);
    }
}
