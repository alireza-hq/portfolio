import z from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: 'Please enter your name properly' }),
  email: z.email({ message: 'Invalid email format' }),
  project: z.string().min(2, { message: 'Please define the project type' }),
  message: z.string().min(10, { message: 'Please enter a proper message' }),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
