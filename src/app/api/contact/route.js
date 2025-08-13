import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function POST(request) {
  try {
    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing required SMTP environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Parse the form data
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email content
    const emailMessage = `
      Name: ${name}\r\n
      Email: ${email}\r\n
      Message: ${message}`;

    const mailOptions = {
      to: process.env.SMTP_TO,
      from: process.env.SMTP_FROM,
      replyTo: email,
      subject: `OPG Biskupovic - Upit s kontakt forme od ${name}`,
      text: emailMessage,
      html: emailMessage.replace(/\r\n/g, '<br>'),
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        status: 'success',
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        status: 'error',
        error: 'Failed to send email' 
      },
      { status: 500 }
    );
  }
}
