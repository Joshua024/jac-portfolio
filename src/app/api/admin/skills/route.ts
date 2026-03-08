import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const skills = await prisma.skill.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(skills);
}

export async function POST(request: Request) {
  const data = await request.json();
  const skill = await prisma.skill.create({ data });
  return NextResponse.json(skill, { status: 201 });
}
