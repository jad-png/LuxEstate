<?php 

namespace App\Services\Interfaces;

use App\Models\BlogComments;
use App\Models\BlogPost;
use App\Models\BlogReactions;

interface IBlogService
{
    /**
     * Summary of createBlogPost
     * @param int $userId
     * @param string $title
     * @param string $content
     * @param string $status
     * @return BlogPost
     */
    public function createBlogPost($userId, $title, $content, $status);
    
    /**
     * Summary of getBlogPost
     * @param int $postId
     * @return BlogPost
     */
    public function getBlogPost($postId);

    /**
     * Summary of addComment
     * @param int $userId
     * @param int $postId
     * @param string $comment
     * @return BlogComments
     */
    public function addComment($userId, $postId, $comment);

    /**
     * Summary of reactToPost
     * @param int $userId
     * @param int $postId
     * @param string $reactionType
     * @return BlogReactions
     */
    public function reactToPost($userId, $postId, $reactionType);

}