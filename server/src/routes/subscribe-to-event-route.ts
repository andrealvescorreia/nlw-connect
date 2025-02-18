import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'

export const subscribeToEventRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Inscreve alguém no evento',
        tags: ['subscription'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
        response: {
          // "serialização". Envia apenas o nome de volta.
          201: z.object({
            name: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { name, email } = request.body

      //TODO: salvar no banco de dados

      return reply.status(201).send({ name })
    }
  )
}
