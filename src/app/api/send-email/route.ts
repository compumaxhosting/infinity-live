import { Resend } from "resend";
import { NextRequest } from "next/server";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    // Validate email service configuration
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
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Parse request body
    const body = await req.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid request data.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    /*
     * Supports both forms:
     *
     * OLD FORM:
     * name
     * email
     * phone
     * message
     *
     * NEW SERVICE DOWNLOAD FORM:
     * name
     * email
     * phone
     * service
     */

    const { name, email, phone, message, service } = body;

    // Validate required common fields
    if (typeof name !== "string" || typeof email !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name and email are required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Trim submitted values
    const cleanName = name.trim();
    const cleanEmail = email.trim();

    const cleanPhone = typeof phone === "string" ? phone.trim() : "";

    const cleanMessage = typeof message === "string" ? message.trim() : "";

    const cleanService = typeof service === "string" ? service.trim() : "";

    // Validate required fields are not empty
    if (!cleanName || !cleanEmail) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name and email are required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Validate field lengths
    if (cleanName.length > 100) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name is too long.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    if (cleanEmail.length > 254) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email address is too long.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    if (cleanPhone.length > 30) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Phone number is too long.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    if (cleanMessage.length > 5000) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Message is too long.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    if (cleanService.length > 100) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Service name is too long.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please provide a valid email address.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Determine which type of form submitted the request
    const isServiceDownloadRequest = Boolean(cleanService);

    /*
     * For the old form:
     * message is required.
     *
     * For the new service download form:
     * service is required.
     */
    if (!isServiceDownloadRequest && !cleanMessage) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Message is required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    if (isServiceDownloadRequest && !cleanService) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Service selection is required.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    // Validate recipients
    const recipients = emailTo
      .split(",")
      .map((address) => address.trim())
      .filter(Boolean);

    if (recipients.length === 0) {
      console.error("EMAIL_TO does not contain a valid recipient");

      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service is not configured correctly.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const resend = new Resend(apiKey);

    // Escape user input before inserting it into HTML
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone);
    const safeMessage = escapeHtml(cleanMessage);
    const safeService = escapeHtml(cleanService);

    let emailContent: string;
    let subject: string;

    if (isServiceDownloadRequest) {
      /*
       * NEW SERVICE DOWNLOAD FORM EMAIL
       */
      subject = "New Service Guide Request";

      emailContent = `
        <h2>New Service Guide Request</h2>

        <p>
          <strong>Name:</strong>
          ${safeName}
        </p>

        <p>
          <strong>Email:</strong>
          ${safeEmail}
        </p>

        <p>
          <strong>Phone:</strong>
          ${safePhone || "Not provided"}
        </p>

        <p>
          <strong>Service:</strong>
          ${safeService}
        </p>

        <p>
          <strong>Request Type:</strong>
          Service Guide Download
        </p>
      `;
    } else {
      /*
       * OLD CONTACT FORM EMAIL
       */
      subject = "New Contact Form Submission";

      emailContent = `
        <h2>New Contact Form Submission</h2>

        <p>
          <strong>Name:</strong>
          ${safeName}
        </p>

        <p>
          <strong>Email:</strong>
          ${safeEmail}
        </p>

        <p>
          <strong>Phone:</strong>
          ${safePhone || "Not provided"}
        </p>

        <p>
          <strong>Message:</strong><br />
          ${safeMessage.replace(/\n/g, "<br />")}
        </p>
      `;
    }

    // Send email using the existing Resend configuration
    const { data, error } = await resend.emails.send({
      from: emailFrom,
      to: recipients,
      replyTo: cleanEmail,
      subject,
      html: emailContent,
    });

    if (error) {
      console.error("Resend API Error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to send your message. Please try again later.",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: isServiceDownloadRequest
          ? "Service guide request submitted successfully!"
          : "Email sent successfully!",
        data,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Something went wrong. Please try again later.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
