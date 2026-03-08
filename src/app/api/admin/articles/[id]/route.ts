import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params { params: Promise<{ id: string }> }

export async function GET(_request: Request, { params }: Params) {
  const { id } = await params;
  const article = await prisma.article.findUnique({ where: { id } });
  if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(article);
}

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const data = await request.json();
  const article = await prisma.article.update({ where: { id }, data });
  return NextResponse.json(article);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await prisma.article.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
