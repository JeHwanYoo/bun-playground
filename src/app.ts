import type { Server } from 'bun'

const hostname = process.env.BUN_HOST ?? 'localhost'
const port = process.env.BUN_PORT ?? 3000

Bun.serve({
  hostname,
  port,
  fetch(request: Request, server: Server): Response | Promise<Response> {
    const ip = server.requestIP(request)
    return new Response(`Your IP is ${JSON.stringify(ip, null, 2)}`)
  },
})

console.log('Server is running on http://localhost:3000/')
