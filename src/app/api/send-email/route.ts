import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!apiKey || !emailFrom || !emailTo) {
      console.error("Email environment variables are not configured");

      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service is not configured.",
        }),
        { status: 500 }
      );
    }

    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name, email, and message are required.",
        }),
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const recipients = emailTo
      .split(",")
      .map((address) => address.trim())
      .filter(Boolean);

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Message:</strong><br />${message}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: recipients,
      replyTo: email,
      subject: "New Contact Form Submission",
      html: emailContent,
    });

    if (error) {
      console.error("Resend API Error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to send your message. Please try again later.",
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
        data,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
