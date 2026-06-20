const WINDOW_MS = 60_000
const MAX_REQUESTS = 30

const store = new Map()

function clientIp(request) {
  // SECURITY: Use Vercel's trusted header first, fall back to x-forwarded-for
  const vff = Array.isArray(request.headers['x-vercel-forwarded-for'])
    ? request.headers['x-vercel-forwarded-for'][0]
    : request.headers['x-vercel-forwarded-for']
  if (vff) return vff.split(',')[0]?.trim()

  const header = Array.isArray(request.headers['x-forwarded-for'])
    ? request.headers['x-forwarded-for'][0]
    : request.headers['x-forwarded-for']
  return header?.split(',')[0]?.trim() || request.socket?.remoteAddress || 'unknown'
}

export function applyRateLimit(request, response) {
  const ip = clientIp(request)
  const now = Date.now()
  const entry = store.get(ip)

  if (!entry || now > entry.reset) {
    store.set(ip, { count: 1, reset: now + WINDOW_MS })
    return false
  }

  if (entry.count >= MAX_REQUESTS) {
    response
      .status(429)
      .setHeader('Retry-After', String(Math.ceil((entry.reset - now) / 1000)))
      .setHeader('X-RateLimit-Limit', String(MAX_REQUESTS))
      .setHeader('X-RateLimit-Remaining', '0')
      .send('Too Many Requests')
    return true
  }

  entry.count += 1
  return false
}
