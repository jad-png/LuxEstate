import React from "react";
import { PostHeader } from "../components/BlogPost/PostHeader";
import { SinglePost } from "../components/BlogPost/SinglePost";

const Post = () => {
    return (
        <div>
            <PostHeader />
            <SinglePost />
        </div>
    );
};

export default Post;