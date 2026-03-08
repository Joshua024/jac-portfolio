import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const where = page ? { page } : {};
  const faqs = await prisma.fAQ.findMany({ where, orderBy: { order: "asc" } });
  return NextResponse.json(faqs);
}

export async function POST(request: Request) {
  const data = await request.json();
  const faq = await prisma.fAQ.create({ data });
  return NextResponse.json(faq, { status: 201 });
}
