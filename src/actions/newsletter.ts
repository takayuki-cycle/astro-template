import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const newsletter = {
  // TODO: 勉強中
  postNewsletter: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email(),
      terms: z.boolean()
    }),
    handler: async ({ email, terms }) => {
      console.log('email', email)
      console.log('terms', terms)
    }
  })
}
