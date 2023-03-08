import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/', async () => {
  return { hello: 'fastify' }
})

await fastify.listen()
