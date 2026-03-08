import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");
  const where = page ? { page } : {};
  const testimonials = await prisma.testimonial.findMany({ where, orderBy: { order: "asc" } });
  return NextResponse.json(testimonials);
}

export async function POST(request: Request) {
  const data = await request.json();
  const testimonial = await prisma.testimonial.create({ data });
  return NextResponse.json(testimonial, { status: 201 });
}
