'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { contactFormSchema, ContactFormValues } from '../schema'

export const useContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) })

  const onSubmit = async (values: ContactFormValues) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 450))
    reset()
  }

  return { register, handleSubmit, onSubmit, errors, isSubmitting, reset }
}
