import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const companies = await prisma.trustedCompany.findMany({
    orderBy: { order: "asc" },
  });
  return NextResponse.json(companies);
}

export async function POST(request: Request) {
  const data = await request.json();
  const company = await prisma.trustedCompany.create({ data });
  return NextResponse.json(company, { status: 201 });
}
