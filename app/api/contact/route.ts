import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().min(8, "Valid phone number is required"),
  email: z.string().email("Valid email address is required"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // 1. Log Enquiry
    console.log("EnviroServe Contact Enquiry Received:", validatedData);

    // 2. Google Sheets API Integration (Google Apps Script Webhook)
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (googleSheetWebhookUrl) {
      try {
        const sheetRes = await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            name: validatedData.name,
            phone: validatedData.phone,
            email: validatedData.email,
            company: validatedData.company || "N/A",
            service: validatedData.service,
            message: validatedData.message || "",
          }),
        });

        if (!sheetRes.ok) {
          console.error("Google Sheets Webhook response error:", await sheetRes.text());
        } else {
          console.log("Successfully forwarded enquiry to Google Sheet!");
        }
      } catch (sheetErr) {
        console.error("Failed to forward enquiry to Google Sheet Webhook:", sheetErr);
      }
    } else {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL is not set in environment variables. Form data processed locally.");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. Our team will contact you shortly.",
        data: validatedData,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const issue = error.issues[0]?.message || "Invalid form data";
      return NextResponse.json({ success: false, error: issue }, { status: 400 });
    }

    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
