import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const logos = await prisma.footerLogo.findMany({
    orderBy: { order: "asc" },
  });
  return NextResponse.json(logos);
}

export async function POST(request: Request) {
  const data = await request.json();
  const count = await prisma.footerLogo.count();
  const logo = await prisma.footerLogo.create({
    data: {
      name: data.name || "Logo",
      icon: data.icon || "Globe",
      order: data.order ?? count,
    },
  });
  return NextResponse.json(logo, { status: 201 });
}
