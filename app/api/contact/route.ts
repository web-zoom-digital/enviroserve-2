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

    // Architecture ready for email gateway / CRM integration (e.g. Resend, SendGrid, Hubspot)
    console.log("EnviroServe Contact Enquiry Received:", validatedData);

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
