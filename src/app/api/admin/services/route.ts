import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const data = await request.json();
  const service = await prisma.service.create({ data });
  return NextResponse.json(service, { status: 201 });
}
