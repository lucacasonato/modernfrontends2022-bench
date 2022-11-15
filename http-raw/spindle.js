import { serve, Response } from 'http-raw/http.js'

serve(() => new Response('Hello, World!'), { port: 6000 })
