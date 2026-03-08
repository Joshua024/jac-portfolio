import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const timeslots = await prisma.timeSlot.findMany({
    orderBy: { order: "asc" },
  });
  return NextResponse.json(timeslots);
}

export async function POST(request: Request) {
  const data = await request.json();
  const timeslot = await prisma.timeSlot.create({ data });
  return NextResponse.json(timeslot, { status: 201 });
}
