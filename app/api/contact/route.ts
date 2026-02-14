import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // send the email
    await resend.emails.send({
      from: "Website Contact Form <onboarding@resend.dev>",
      to: "falaise@bledowski.com",
      subject: "New Contact Form Submission",
      html: `
        <div>
          <h2>New Message from ${data.firstName} ${data.lastName}</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}