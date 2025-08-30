import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Все поля обязательны" }, { status: 400 });
    }

    await resend.emails.send({
      from: '3SAtelier <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL!],
      subject: `Новое сообщение от ${name}`,
      text: message,
      html: `<p>${message}</p><p>От: ${name} (${email})</p>`,
    });

    return NextResponse.json({ message: "Сообщение отправлено!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Ошибка при отправке сообщения" }, { status: 500 });
  }
}
