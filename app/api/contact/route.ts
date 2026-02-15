import { NextResponse } from "next/server"
import nodemailer from "nodemailer"


export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json()

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        await transporter.sendMail({
            from: `"Website Contact" <${process.env.SMTP_USER}>`,
            to: "solutions@thehssolutions.com",
            subject: `New Contact from ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}
      `,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
