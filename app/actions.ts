'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: {
  name: string
  email: string
  company: string
  message: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'DecisionLens <onboarding@resend.dev>', // Use your verified domain in production
      to: ['adeoluamole@gmail.com'], // Where you want to receive the leads
      subject: `New Lead: ${formData.name} from ${formData.company}`,
      replyTo: formData.email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    return { success: false, error: 'Failed to send email' }
  }
}
