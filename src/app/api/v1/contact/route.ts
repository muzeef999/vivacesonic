// app/api/sendEmail/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const POST = async (req: NextRequest) => {
  try {
    // ✅ 1. Parse request body
    const body = await req.json(); // <-- Important in app router!
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // ✅ 2. Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ 3. Create mail options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: message,
    };

    // ✅ 4. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('Error sending email:', err);
    return NextResponse.json(
      { success: false, message: 'Email failed to send', error: err.message },
      { status: 500 }
    );
  }
};
