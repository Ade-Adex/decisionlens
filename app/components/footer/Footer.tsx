// /app/components/footer/Footer.tsx

'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import SectionHeader from '@/app/components/shared/SectionHeader'
import { sendEmail } from '@/app/actions' // Import the action
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // UPDATED: Now calls the Resend Server Action
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setServerError(null)

    const result = await sendEmail(data)

    if (result.success) {
      setSubmitted(true)
      reset()
    } else {
      setServerError(result.error || 'Something went wrong. Please try again.')
    }

    setIsSubmitting(false)
  }

  return (
    <footer
      id="contact"
      className="relative bg-[#0f2348] text-white pt-28 pb-16 overflow-hidden"
    >
      {/* ===== Curved Top Shape ===== */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          className="block w-full h-35"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C240,40 480,40 720,70 960,100 1200,100 1440,60 L1440,0 L0,0 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <SectionHeader
          title="Ready to transform your business?"
          titleColor="text-white"
        />

        {submitted ? (
          <div className="mt-12 p-8 bg-green-500/10 border border-green-500 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold">Message Sent!</h3>
            <p className="text-slate-300 mt-2">
              Thank you for reaching out. We will get back to you shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm underline hover:text-[#D29D48]"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 mt-12 max-w-2xl mx-auto text-left"
          >
            {serverError && (
              <div className="p-3 bg-red-500/20 border border-red-500 text-red-200 rounded text-sm mb-4">
                {serverError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  {...register('name')}
                  className={`w-full px-4 py-2 rounded-md bg-transparent text-white border ${errors.name ? 'border-red-500' : 'border-slate-300'} focus:outline-none`}
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...register('email')}
                  className={`w-full px-4 py-2 rounded-md bg-transparent text-white border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                {...register('company')}
                className={`w-full px-4 py-2 rounded-md bg-transparent text-white border ${errors.company ? 'border-red-500' : 'border-slate-300'} focus:outline-none`}
                placeholder="Company"
              />
              {errors.company && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register('message')}
                className={`w-full h-28 px-4 py-2 rounded-md bg-transparent text-white border ${errors.message ? 'border-red-500' : 'border-slate-300'} resize-none focus:outline-none`}
                placeholder="Message"
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-2 w-full md:w-auto flex justify-center mx-auto px-8 py-3 bg-[#D29D48] text-[#0f2348] font-bold rounded-md shadow hover:bg-[#c08a3a] transition disabled:opacity-50 ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isSubmitting ? 'Sending...' : 'Get Started'}
            </button>
          </form>
        )}

        {/* ===== Social Media Icons ===== */}
        <div className="mt-14 flex justify-center gap-6">
          <SocialIcon href="#" label="Facebook">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://wa.me/2348140877018" label="WhatsApp">
            <FaWhatsapp />
          </SocialIcon>
          <SocialIcon href="#" label="LinkedIn">
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon href="#" label="Instagram">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="#" label="Twitter / X">
            <FaXTwitter />
          </SocialIcon>
        </div>

        <p className="mt-16 text-slate-400 text-sm">
          © {new Date().getFullYear()} DecisionLens. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center text-lg text-white transition-all duration-300 hover:bg-[#D29D48] hover:text-[#0f2348] hover:-translate-y-1 hover:shadow-lg"
    >
      {children}
    </a>
  )
}