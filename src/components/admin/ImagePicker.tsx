"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Upload, Image as ImageIcon, X, Check } from "lucide-react";
import NextImage from "next/image";

interface MediaFile {
  name: string;
  url: string;
  size: number;
  createdAt: string;
}

interface ImagePickerProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export function ImagePicker({ value, onChange, label }: ImagePickerProps) {
  const [showLibrary, setShowLibrary] = useState(false);
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchFiles = useCallback(async () => {
    const data = await fetch("/api/admin/media").then((r) => r.json());
    setFiles(data);
  }, []);

  useEffect(() => {
    if (showLibrary) fetchFiles();
  }, [showLibrary, fetchFiles]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles?.length) return;

    setUploading(true);
    for (let i = 0; i < selectedFiles.length; i++) {
      const formData = new FormData();
      formData.append("file", selectedFiles[i]);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        onChange(data.url);
        setShowLibrary(false);
      }
    }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSelect = (url: string) => {
    onChange(url);
    setShowLibrary(false);
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1.5">{label}</label>
      )}

      {/* Preview + controls */}
      <div className="flex items-start gap-3">
        {/* Thumbnail */}
        <div className="relative w-24 h-24 bg-gray-700 border border-gray-600 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
          {value ? (
            <NextImage src={value} alt="Selected" fill className="object-cover" sizes="96px" />
          ) : (
            <ImageIcon size={24} className="text-gray-500" />
          )}
        </div>

        <div className="flex flex-col gap-2 flex-1 min-w-0">
          {/* URL input */}
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Image URL or upload..."
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowLibrary(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-primary text-xs font-medium transition-colors"
            >
              <ImageIcon size={14} />
              Browse Library
            </button>
            <label className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-primary text-xs font-medium transition-colors cursor-pointer">
              <Upload size={14} />
              {uploading ? "Uploading..." : "Upload"}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 border border-gray-600 rounded-lg text-red-400 hover:text-red-300 hover:border-red-400 text-xs font-medium transition-colors"
              >
                <X size={14} />
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Library Modal */}
      {showLibrary && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-xl w-full max-w-3xl max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">Select Image</h3>
              <button onClick={() => setShowLibrary(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="p-5 overflow-y-auto flex-1">
              {files.length === 0 ? (
                <div className="text-center py-12">
                  <ImageIcon size={48} className="mx-auto text-gray-600 mb-4" />
                  <p className="text-gray-400 text-sm mb-4">No images in library. Upload one to get started.</p>
                  <label className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <Upload size={16} />
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                </div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                  {files.map((file) => (
                    <button
                      key={file.url}
                      type="button"
                      onClick={() => handleSelect(file.url)}
                      className={`group relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                        value === file.url
                          ? "border-primary"
                          : "border-transparent hover:border-gray-500"
                      }`}
                    >
                      <NextImage
                        src={file.url}
                        alt={file.name}
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                      {value === file.url && (
                        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                          <Check size={24} className="text-white drop-shadow-lg" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
