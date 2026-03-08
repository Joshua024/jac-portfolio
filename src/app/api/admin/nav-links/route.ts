import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const links = await prisma.navLink.findMany({
    orderBy: { order: "asc" },
  });
  return NextResponse.json(links);
}

export async function POST(request: Request) {
  const data = await request.json();
  const link = await prisma.navLink.create({ data });
  return NextResponse.json(link, { status: 201 });
}
