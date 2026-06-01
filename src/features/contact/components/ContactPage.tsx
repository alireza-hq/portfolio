import { ContactSignalPanel } from './ContactSignalPanel'
import { ContactForm } from './ContactForm'

export function ContactPage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto grid w-full max-w-7xl items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch'>
        <ContactSignalPanel />
        <ContactForm />
      </section>
    </main>
  )
}
