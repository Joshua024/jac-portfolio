import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, date, time, service, message } = await request.json();

  if (!name || !email || !date || !time || !service) {
    return NextResponse.json(
      { error: "Name, email, date, time, and service are required" },
      { status: 400 }
    );
  }

  const booking = await prisma.booking.create({
    data: {
      fullName: name,
      email,
      date,
      timeSlot: time,
      details: message || "",
    },
  });

  return NextResponse.json(
    { success: true, id: booking.id },
    { status: 201 }
  );
}
