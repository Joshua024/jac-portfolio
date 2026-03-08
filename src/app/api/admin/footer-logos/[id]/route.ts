import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();
  const logo = await prisma.footerLogo.update({
    where: { id },
    data,
  });
  return NextResponse.json(logo);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await prisma.footerLogo.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
