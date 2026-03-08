import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params { params: Promise<{ id: string }> }

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const data = await request.json();
  const testimonial = await prisma.testimonial.update({ where: { id }, data });
  return NextResponse.json(testimonial);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await prisma.testimonial.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
