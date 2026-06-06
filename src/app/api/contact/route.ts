import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { routes } from '@/lib/routes'
import { contactFormSchema } from '@/features/contact/schema'

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { message: 'Email service is not configured yet.' },
      { status: 503 },
    )
  }

  const parsed = contactFormSchema.safeParse(await request.json())

  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please check the form fields and try again.' },
      { status: 400 },
    )
  }

  const { name, email, project, message } = parsed.data
  const recipient =
    process.env.CONTACT_TO_EMAIL ?? routes.social.email.replace('mailto:', '')
  const sender =
    process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>'
  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: sender,
    to: [recipient],
    replyTo: email,
    subject: `Portfolio contact: ${project}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project: ${project}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    console.error('Resend error:', error)

    return NextResponse.json(
      { message: 'Email delivery failed. Please try again shortly.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ message: 'Message sent.' })
}
