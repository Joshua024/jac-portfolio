import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  const submission = await prisma.contactSubmission.create({
    data: { fullName: name, email, subject: subject || "", message },
  });

  return NextResponse.json(
    { success: true, id: submission.id },
    { status: 201 }
  );
}
