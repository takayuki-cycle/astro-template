import { defineAction, ActionError } from 'astro:actions'
import { z } from 'astro:schema'

export const users = {
  // TODO: 勉強中
  getUsers: defineAction({
    input: z.object({
      name: z.string()
    }),
    handler: async (input) => {
      if (input.name === 'TEST') {
        throw new ActionError({
          code: 'NOT_FOUND',
          message: `サーバは要求された${input.name}のリソースを見つけることができませんでした。`
        })
      }
      return `Hello, ${input.name}!`
    }
  }), // actions.users.getUsers()で呼び出し可能
  createUsers: defineAction({
    handler: async () => {}
  }) // actions.users.createUsers()で呼び出し可能
}
