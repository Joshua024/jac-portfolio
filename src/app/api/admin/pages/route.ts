import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const section = searchParams.get("section");

  const where: Record<string, string> = {};
  if (page) where.page = page;
  if (section) where.section = section;

  const content = await prisma.pageContent.findMany({
    where,
    orderBy: { order: "asc" },
  });
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  const items: { page: string; section: string; key: string; value: string; type?: string; order?: number }[] = await request.json();

  const results = [];
  for (const item of items) {
    const result = await prisma.pageContent.upsert({
      where: { page_section_key: { page: item.page, section: item.section, key: item.key } },
      update: { value: item.value, type: item.type, order: item.order },
      create: item,
    });
    results.push(result);
  }

  return NextResponse.json(results);
}
