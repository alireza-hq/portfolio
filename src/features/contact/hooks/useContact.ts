'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { routes } from '@/lib/routes'

import { contactFormSchema, ContactFormValues } from '../schema'

export const useContact = () => {
  const [submitMessage, setSubmitMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = async (values: ContactFormValues) => {
    const recipient = routes.social.email.replace('mailto:', '')
    const subject = encodeURIComponent(`${values.project} - ${values.name}`)
    const body = encodeURIComponent(
      `${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`,
    )

    setSubmitMessage('Opening your email app...')
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
    reset()
    setSubmitMessage('Draft opened. Send it from your email app.')
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    submitMessage,
    reset,
  }
}
