import Fastify from 'fastify'

const start = async function () {
  const fastify = Fastify()

  fastify.get('/', async () => {
    return { hello: 'fastify' }
  })

  try {
    await fastify.listen({ host: '127.0.0.1', port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
