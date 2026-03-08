"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { ArticleComment } from "@/data/articleDetails";

interface ArticleCommentsProps {
  comments: ArticleComment[];
}

function CommentItem({ comment }: { comment: ArticleComment }) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <div className="flex gap-4">
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
        {comment.avatar}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span className="font-semibold text-gray-900 text-sm">
            {comment.author}
          </span>
          <span className="text-xs text-gray-400">{comment.date}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          {comment.content}
        </p>
        <button
          onClick={() => setShowReplyBox(!showReplyBox)}
          className="text-xs text-[#3B82F6] font-medium hover:underline"
        >
          Reply
        </button>

        {showReplyBox && (
          <div className="mt-3">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Write a reply..."
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 resize-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none"
              rows={3}
            />
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 bg-[#3B82F6] text-white text-xs font-medium rounded-lg hover:bg-[#2563EB] transition-colors">
                Post Reply
              </button>
              <button
                onClick={() => {
                  setShowReplyBox(false);
                  setReplyText("");
                }}
                className="px-4 py-2 text-gray-500 text-xs font-medium hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Replies */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-4 space-y-4 pl-2 border-l-2 border-gray-100">
            {comment.replies.map((reply) => (
              <div key={reply.id} className="flex gap-3 pl-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {reply.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-gray-900 text-sm">
                      {reply.author}
                    </span>
                    <span className="text-xs text-gray-400">{reply.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reply.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ArticleComments({ comments }: ArticleCommentsProps) {
  const [newComment, setNewComment] = useState("");

  const totalComments = comments.reduce(
    (acc, c) => acc + 1 + (c.replies?.length || 0),
    0
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <MessageCircle className="w-5 h-5 text-gray-900" />
          <h2 className="text-xl font-bold text-gray-900">
            Comments ({totalComments})
          </h2>
        </div>

        {/* New Comment Form */}
        <div className="mb-10">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Leave a comment..."
            className="w-full px-5 py-4 border border-gray-200 rounded-xl text-sm text-gray-900 resize-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none"
            rows={4}
          />
          <div className="flex justify-end mt-3">
            <button className="px-6 py-2.5 bg-[#3B82F6] text-white text-sm font-semibold rounded-xl hover:bg-[#2563EB] transition-colors">
              Post Comment
            </button>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-8">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </section>
  );
}
