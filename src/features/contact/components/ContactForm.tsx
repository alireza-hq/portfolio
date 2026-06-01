'use client'

import {
  ContactFloatingField,
  ContactFloatingTextarea,
} from './ContactFloatingField'
import { ContactFormHeader } from './ContactFormHeader'
import { ContactSubmitBar } from './ContactSubmitBar'
import { useContact } from '../hooks/useContact'

export const ContactForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useContact()

  return (
    <form
      className='rounded-4xl border border-zinc-900/10 bg-white/76 p-6 shadow-2xl shadow-zinc-900/8 backdrop-blur-md sm:p-8 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/25'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <ContactFormHeader />

      <div className='grid gap-5 sm:grid-cols-2'>
        <ContactFloatingField
          error={errors.name}
          label='Name'
          registration={register('name')}
        />
        <ContactFloatingField
          error={errors.email}
          label='Email'
          registration={register('email')}
          type='email'
        />
      </div>

      <div className='mt-5'>
        <ContactFloatingField
          error={errors.project}
          label='Project type'
          registration={register('project')}
        />
      </div>

      <ContactFloatingTextarea
        error={errors.message}
        label='Message'
        registration={register('message')}
      />

      <ContactSubmitBar isSubmitting={isSubmitting} />
    </form>
  )
}
