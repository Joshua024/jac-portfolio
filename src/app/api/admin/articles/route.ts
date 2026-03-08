import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(articles);
}

export async function POST(request: Request) {
  const data = await request.json();
  const article = await prisma.article.create({ data });
  return NextResponse.json(article, { status: 201 });
}
