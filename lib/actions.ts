'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import {
  ContactFormSchema,
  NewsletterFormSchema
} from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'
import { v4 as uuid } from 'uuid'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<
  typeof NewsletterFormSchema
>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: z.treeifyError(result.error) }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'oi@contato.igormotta.dev',
      to: [email],
      cc: 'igor.fmotta@gmail.com',
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: await ContactFormEmail({
        name,
        email,
        message
      }),
      headers: {
        'X-Entity-Ref-ID': uuid()
      },
      tags: [
        {
          name: 'category',
          value: 'contact_email'
        }
      ]
    })

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(
  data: NewsletterFormInputs
) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: z.treeifyError(result.error) }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}
