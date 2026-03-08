import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import crypto from "crypto";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml", "image/avif"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type. Allowed: JPEG, PNG, GIF, WebP, SVG, AVIF" }, { status: 400 });
  }

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return NextResponse.json({ error: "File too large. Max 5MB" }, { status: 400 });
  }

  const ext = path.extname(file.name).toLowerCase() || ".png";
  const allowedExts = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif"];
  if (!allowedExts.includes(ext)) {
    return NextResponse.json({ error: "Invalid file extension" }, { status: 400 });
  }

  const uniqueName = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, uniqueName);

  const bytes = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(bytes));

  return NextResponse.json({ url: `/uploads/${uniqueName}`, name: file.name });
}
