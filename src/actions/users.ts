import { defineAction } from 'astro:actions'
import { z } from 'astro:schema'

export const users = {
  // TODO: getUsersがあいさつするコードになっているので修正が必要
  getUsers: defineAction({
    input: z.object({
      name: z.string()
    }),
    handler: async (input) => {
      return `Hello, ${input.name}!`
    }
  }), // actions.users.getUsers()で呼び出し可能
  createUsers: defineAction({
    handler: async () => {}
  }) // actions.users.createUsers()で呼び出し可能
}
