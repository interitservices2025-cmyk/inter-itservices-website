import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, message, honeypot } = body;

    // 1. Anti-spam honeypot check
    if (honeypot && honeypot.trim() !== "") {
      // Return fake success to deceive spam bots without processing
      return NextResponse.json({ success: true, message: "Message processed" }, { status: 200 });
    }

    // 2. Validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Une adresse courriel valide est requise." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Veuillez fournir un message d'au moins 5 caractères." },
        { status: 400 }
      );
    }

    // 3. Structured logging for production observability
    const contactPayload = {
      timestamp: new Date().toISOString(),
      clientName: `${firstName || ""} ${lastName || ""}`.trim() || "Non spécifié",
      email,
      phone: phone || "Non renseigné",
      company: company || "Non renseigné",
      service: service || "Non spécifié",
      messageLength: message.length,
    };

    console.log("[CONTACT_FORM_SUBMISSION]", JSON.stringify(contactPayload, null, 2));

    // Here an external email transport (Resend, Nodemailer or webhook) can easily be connected
    // when SMTP/API keys are provided in .env.local

    return NextResponse.json(
      {
        success: true,
        message: "Votre demande a été transmise avec succès à l'équipe INTER-IT Services.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_FORM_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur interne est survenue lors de l'enregistrement de votre demande.",
      },
      { status: 500 }
    );
  }
}
