import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";

export default function ArticleAuthor() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center text-white font-bold text-sm">
            JA
          </div>
          <div>
            <p className="font-semibold text-gray-900">Joshua Adumchimma</p>
            <p className="text-sm text-gray-500">
              Creative Developer & Designer
            </p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 mr-1">Share:</span>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0077B5] hover:text-white transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-4 h-4" />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-700 hover:text-white transition-colors"
            aria-label="Copy link"
          >
            <Link2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
