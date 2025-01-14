import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Ensure EMAIL_TO is defined
  if (!process.env.EMAIL_TO) {
    throw new Error("EMAIL_TO environment variable is not set");
  }

  // Split and trim recipient emails
  const recipients = process.env.EMAIL_TO.split(',').map((email) => email.trim());

  // Prepare the email content
  const emailContent = ` 
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br />${message}</p>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM!, // Sender email
      to: recipients,              // Array of recipient emails
      subject: 'New Contact Form Submission', // Subject
      html: emailContent,          // Email content as HTML
    });

    if (error) {
      console.error('Resend API Error:', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message || 'An error occurred' }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully!', data }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'An unknown error occurred' }),
      { status: 500 }
    );
  }
}
