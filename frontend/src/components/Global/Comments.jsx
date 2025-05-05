import React, { useState } from "react";
import { Link } from "react-router";
import api from "../../services/api";

export function Comments({ post }) {
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [comments, setComments] = useState(post.comments || []);

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!newComment.trim()) {
      setError("Comment cannot be empty");
      return;
    }

    setSubmitting(true);
    try {
      const response = await api.post("/blog/posts/comment", {
        blog_post_id: post.id,
        comment: newComment,
      });

      const { comment: newCommentData } = response.data; // Backend returns { message, comment }
      setComments((prev) => [...prev, newCommentData]);
      setNewComment("");
      setSuccess("Comment added successfully!");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit comment");
    } finally {
      setSubmitting(false);
    }
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Get user initials for avatar placeholder
  const getInitials = (name) => {
    if (!name) return "??";
    const names = name.split(" ");
    return names.length > 1
      ? `${names[0][0]}${names[1][0]}`
      : names[0].slice(0, 2);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div>
        {/* Comments Section */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-8">
            Comments
          </h3>
          {comments.length === 0 ? (
            <p className="text-[#666666] manrope italic">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start py-6 border-b border-[#e5e5e5] transition-all duration-200 hover:bg-gray-50"
              >
                <div className="w-12 h-12 bg-[#e5e5e5] flex items-center justify-center text-[#666666] manrope text-sm font-semibold rounded-full">
                  {getInitials(comment.user?.name)}
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[#262626] manrope font-semibold">
                        {comment.user?.name || "Anonymous"}
                      </h4>
                      <p className="text-sm text-[#666666] manrope">
                        {formatDate(comment.created_at)}
                      </p>
                    </div>
                    <button className="text-[#a27d56] manrope text-sm uppercase hover:text-[#8b6a47] transition-colors duration-200">
                      Reply
                    </button>
                  </div>
                  <p className="text-[#666666] manrope mt-2 leading-relaxed">
                    {comment.comment || comment.content} {/* Backend uses 'comment', frontend may expect 'content' */}
                  </p>
                </div>
              </div>
            ))
          )}
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-500 rounded-lg shadow-sm flex justify-between items-center">
              <p aria-live="assertive">{error}</p>
              <button
                onClick={() => setError(null)}
                className="text-red-500 hover:text-red-700"
                aria-label="Dismiss error"
              >
                ×
              </button>
            </div>
          )}
          {success && (
            <div className="mt-4 p-3 bg-green-50 text-green-500 rounded-lg shadow-sm flex justify-between items-center">
              <p aria-live="assertive">{success}</p>
              <button
                onClick={() => setSuccess(null)}
                className="text-green-500 hover:text-green-700"
                aria-label="Dismiss success message"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Comment Form */}
        <div className="mt-12">
          <h3 className="text-2xl lg:text-3xl font-semibold dm-serif text-[#262626] mb-6">
            Leave a Comment
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              placeholder="Your Comment *"
              rows="5"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-4 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] focus:ring-2 focus:ring-[#a27d56] resize-none rounded-lg shadow-sm"
              aria-label="Comment input"
            />
            <button
              type="submit"
              disabled={submitting}
              className={`w-full md:w-auto bg-[#a27d56] text-white px-8 py-3 manrope uppercase tracking-wider hover:bg-[#8b6a47] transition-colors duration-200 rounded-lg flex items-center justify-center shadow-md ${
                submitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Post comment"
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h-8z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Post Comment"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments;