"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Upload, Trash2, Copy, Check, Image as ImageIcon } from "lucide-react";
import NextImage from "next/image";

interface MediaFile {
  name: string;
  url: string;
  size: number;
  createdAt: string;
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function AdminMediaPage() {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchFiles = useCallback(async () => {
    const data = await fetch("/api/admin/media").then((r) => r.json());
    setFiles(data);
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles?.length) return;

    setUploading(true);
    for (let i = 0; i < selectedFiles.length; i++) {
      const formData = new FormData();
      formData.append("file", selectedFiles[i]);
      await fetch("/api/admin/upload", { method: "POST", body: formData });
    }
    setUploading(false);
    fetchFiles();
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDelete = async (url: string) => {
    if (!confirm("Delete this image?")) return;
    await fetch("/api/admin/media", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });
    fetchFiles();
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Media Library</h1>
        <label className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-medium transition-colors cursor-pointer">
          <Upload size={16} />
          {uploading ? "Uploading..." : "Upload Images"}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="hidden"
            disabled={uploading}
          />
        </label>
      </div>

      {files.length === 0 ? (
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 text-center">
          <ImageIcon size={48} className="mx-auto text-gray-600 mb-4" />
          <p className="text-gray-400 text-sm">No images uploaded yet. Click &quot;Upload Images&quot; to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {files.map((file) => (
            <div
              key={file.url}
              className="group bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
            >
              <div className="relative aspect-square bg-gray-900">
                <NextImage
                  src={file.url}
                  alt={file.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleCopy(file.url)}
                    className="p-2 bg-white/90 rounded-lg text-gray-900 hover:bg-white transition-colors"
                    title="Copy URL"
                  >
                    {copiedUrl === file.url ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                  <button
                    onClick={() => handleDelete(file.url)}
                    className="p-2 bg-red-500/90 rounded-lg text-white hover:bg-red-500 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="p-2">
                <p className="text-xs text-gray-300 truncate" title={file.name}>{file.name}</p>
                <p className="text-xs text-gray-500">{formatSize(file.size)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
