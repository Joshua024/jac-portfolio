import { NextResponse } from "next/server";
import { readdir, stat, unlink } from "fs/promises";
import path from "path";

export async function GET() {
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  try {
    const files = await readdir(uploadDir);
    const images = [];

    for (const file of files) {
      if (file === ".gitkeep") continue;
      const ext = path.extname(file).toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif"].includes(ext)) continue;

      const filePath = path.join(uploadDir, file);
      const fileStat = await stat(filePath);

      images.push({
        name: file,
        url: `/uploads/${file}`,
        size: fileStat.size,
        createdAt: fileStat.birthtime.toISOString(),
      });
    }

    images.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json(images);
  } catch {
    return NextResponse.json([]);
  }
}

export async function DELETE(request: Request) {
  const { url } = await request.json();
  if (!url || typeof url !== "string") {
    return NextResponse.json({ error: "No URL provided" }, { status: 400 });
  }

  const filename = path.basename(url);
  // Prevent path traversal
  if (filename.includes("..") || filename.includes("/") || filename.includes("\\")) {
    return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "public", "uploads", filename);

  try {
    await unlink(filePath);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
