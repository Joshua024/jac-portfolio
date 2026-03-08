"use client";

import { useState, useMemo } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
} from "lucide-react";
import { articles, blogCategories } from "@/data/articles";
import ArticleCard from "./ArticleCard";

const ITEMS_PER_PAGE = 9;

export default function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("newest");
  const [showSortDrop, setShowSortDrop] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and sort
  const filteredArticles = useMemo(() => {
    let result = [...articles];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== "All Categories") {
      result = result.filter((a) => a.category === selectedCategory);
    }

    if (sortBy === "newest") {
      result.sort((a, b) => b.id - a.id);
    } else if (sortBy === "oldest") {
      result.sort((a, b) => a.id - b.id);
    } else if (sortBy === "a-z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate visible page numbers
  const getPageNumbers = () => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);
    start = Math.max(1, end - maxVisible + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <section className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog Articles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on design, development, and
            digital strategy.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Search, Categories, Sort, View Toggle */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 w-44 focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 flex-1">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#4F46E5] text-white"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDrop(!showSortDrop)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Sort by:{" "}
              {sortBy === "newest"
                ? "Newest"
                : sortBy === "oldest"
                ? "Oldest"
                : "A-Z"}
              <ChevronDown className="w-4 h-4" />
            </button>
            {showSortDrop && (
              <div className="absolute top-full right-0 mt-1 w-36 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                {[
                  { value: "newest", label: "Newest" },
                  { value: "oldest", label: "Oldest" },
                  { value: "a-z", label: "A - Z" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setShowSortDrop(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      sortBy === opt.value
                        ? "text-[#4F46E5] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* View Toggle */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "grid"
                  ? "bg-[#4F46E5] text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "list"
                  ? "bg-[#4F46E5] text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Articles */}
        {paginatedArticles.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                : "flex flex-col gap-6 mb-12"
            }
          >
            {paginatedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
                setCurrentPage(1);
              }}
              className="text-[#4F46E5] font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredArticles.length > 0 && (
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-500">
              Showing {paginatedArticles.length} of {filteredArticles.length}{" "}
              articles
            </p>

            <div className="flex items-center gap-1">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {getPageNumbers().map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    currentPage === page
                      ? "bg-[#4F46E5] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
