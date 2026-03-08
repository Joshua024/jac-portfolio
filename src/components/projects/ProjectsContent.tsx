"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  projects,
  projectCategories,
  allTechnologies,
  projectStatuses,
} from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ITEMS_PER_PAGE_OPTIONS = [6, 12, 24];

export default function ProjectsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTechnology, setSelectedTechnology] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // Dropdowns
  const [showCategoryDrop, setShowCategoryDrop] = useState(false);
  const [showTechDrop, setShowTechDrop] = useState(false);
  const [showStatusDrop, setShowStatusDrop] = useState(false);
  const [showSortDrop, setShowSortDrop] = useState(false);

  // Active filters
  const activeFilters: { label: string; clear: () => void }[] = [];
  if (selectedCategory !== "All")
    activeFilters.push({
      label: selectedCategory,
      clear: () => setSelectedCategory("All"),
    });
  if (selectedTechnology !== "All")
    activeFilters.push({
      label: selectedTechnology,
      clear: () => setSelectedTechnology("All"),
    });
  if (selectedStatus !== "All")
    activeFilters.push({
      label: selectedStatus,
      clear: () => setSelectedStatus("All"),
    });

  const clearAllFilters = () => {
    setSelectedCategory("All");
    setSelectedTechnology("All");
    setSelectedStatus("All");
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Filter and sort
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.technologies.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Category
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Technology
    if (selectedTechnology !== "All") {
      result = result.filter((p) =>
        p.technologies.includes(selectedTechnology)
      );
    }

    // Status
    if (selectedStatus !== "All") {
      result = result.filter((p) => p.status === selectedStatus);
    }

    // Sort
    if (sortBy === "newest") {
      result.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    } else if (sortBy === "oldest") {
      result.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (sortBy === "a-z") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "z-a") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedTechnology, selectedStatus, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const showingStart = filteredProjects.length > 0 ? startIndex + 1 : 0;
  const showingEnd = Math.min(
    startIndex + itemsPerPage,
    filteredProjects.length
  );

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#3B82F6] font-medium mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Projects
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my complete portfolio of design and development work
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search For Project"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent outline-none transition-all text-gray-900"
            />
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-sm font-semibold text-gray-700">Filters:</span>

          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowCategoryDrop(!showCategoryDrop);
                setShowTechDrop(false);
                setShowStatusDrop(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Project Type
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCategoryDrop && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowCategoryDrop(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      selectedCategory === cat
                        ? "text-[#3B82F6] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Technology Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowTechDrop(!showTechDrop);
                setShowCategoryDrop(false);
                setShowStatusDrop(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Technology
              <ChevronDown className="w-4 h-4" />
            </button>
            {showTechDrop && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2 max-h-64 overflow-y-auto">
                <button
                  onClick={() => {
                    setSelectedTechnology("All");
                    setShowTechDrop(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    selectedTechnology === "All"
                      ? "text-[#3B82F6] font-medium"
                      : "text-gray-700"
                  }`}
                >
                  All
                </button>
                {allTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setSelectedTechnology(tech);
                      setShowTechDrop(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      selectedTechnology === tech
                        ? "text-[#3B82F6] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowStatusDrop(!showStatusDrop);
                setShowCategoryDrop(false);
                setShowTechDrop(false);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Status
              <ChevronDown className="w-4 h-4" />
            </button>
            {showStatusDrop && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                <button
                  onClick={() => {
                    setSelectedStatus("All");
                    setShowStatusDrop(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                    selectedStatus === "All"
                      ? "text-[#3B82F6] font-medium"
                      : "text-gray-700"
                  }`}
                >
                  All
                </button>
                {projectStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setSelectedStatus(status);
                      setShowStatusDrop(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      selectedStatus === status
                        ? "text-[#3B82F6] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear Filters */}
          {activeFilters.length > 0 && (
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Active Filter Tags */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {activeFilters.map((filter) => (
              <span
                key={filter.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-lg"
              >
                {filter.label}
                <button
                  onClick={filter.clear}
                  className="hover:text-[#2563EB]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Sort Row */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="relative">
            <button
              onClick={() => setShowSortDrop(!showSortDrop)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {sortBy === "newest"
                ? "Newest First"
                : sortBy === "oldest"
                ? "Oldest First"
                : sortBy === "a-z"
                ? "A - Z"
                : "Z - A"}
              <ChevronDown className="w-4 h-4" />
            </button>
            {showSortDrop && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
                {[
                  { value: "newest", label: "Newest First" },
                  { value: "oldest", label: "Oldest First" },
                  { value: "a-z", label: "A - Z" },
                  { value: "z-a", label: "Z - A" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setSortBy(opt.value);
                      setShowSortDrop(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                      sortBy === opt.value
                        ? "text-[#3B82F6] font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project Grid */}
        {paginatedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              No projects found matching your criteria.
            </p>
            <button
              onClick={clearAllFilters}
              className="text-[#3B82F6] font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredProjects.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Showing {showingStart}-{showingEnd} of {filteredProjects.length}{" "}
              projects
            </p>

            <div className="flex items-center gap-4">
              {/* Items per page */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Show:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#3B82F6]"
                >
                  {ITEMS_PER_PAGE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Page buttons */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-[#3B82F6] text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
