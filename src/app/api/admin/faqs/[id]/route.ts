import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Params { params: Promise<{ id: string }> }

export async function PUT(request: Request, { params }: Params) {
  const { id } = await params;
  const data = await request.json();
  const faq = await prisma.fAQ.update({ where: { id }, data });
  return NextResponse.json(faq);
}

export async function DELETE(_request: Request, { params }: Params) {
  const { id } = await params;
  await prisma.fAQ.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
