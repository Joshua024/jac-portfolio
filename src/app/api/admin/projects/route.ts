import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const projects = await prisma.project.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const data = await request.json();
  const project = await prisma.project.create({ data });
  return NextResponse.json(project, { status: 201 });
}
