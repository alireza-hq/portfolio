'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { contactFormSchema, ContactFormValues } from '../schema'

export type ContactSubmitStatus = {
  type: 'idle' | 'success' | 'error'
  message: string
}

export const useContact = () => {
  const [submitStatus, setSubmitStatus] = useState<ContactSubmitStatus>({
    type: 'idle',
    message: '',
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus({ type: 'idle', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(result.message || 'Could not send the message.')
      }

      reset()
      setSubmitStatus({
        type: 'success',
        message: 'Message sent. I will get back to you soon.',
      })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Could not send the message. Please try again.',
      })
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    submitStatus,
    reset,
  }
}
