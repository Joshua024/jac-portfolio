import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const existing = await prisma.newsletterSubscriber.findUnique({
    where: { email },
  });

  if (existing) {
    return NextResponse.json(
      { success: true, message: "Already subscribed" },
      { status: 200 }
    );
  }

  await prisma.newsletterSubscriber.create({ data: { email } });

  return NextResponse.json(
    { success: true, message: "Subscribed successfully" },
    { status: 201 }
  );
}
