import { NextResponse } from "next/server";
import { Resend } from 'resend';


export async function POST(request: Request) {
  try {
    // 1. Extract the JSON body payload sent from your form
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Validate that the fields arrived intact
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Send the email data payload somewhere securely (Phase 2)
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'li.javier.santana@gmail.com',
    subject: `New Message from ${name}`,
    text: `Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}