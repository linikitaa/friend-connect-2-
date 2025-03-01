import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function POST(req: Request) {
  // Если refresh token действителен, генерируем новую пару токенов.
  // Предыдущий refresh token можно добавить в чёрный список.
  await delay(1000)
  const cookieStore = cookies()
  const refreshToken = (await cookieStore).get('refreshToken')

  if (!refreshToken) {
    return NextResponse.json('Not authorized', { status: 401 })
  }

  const now = new Date()
  const expirationDate = new Date(now.getTime() + 0.5 * 60 * 1000)
  const pseudoToken = { expirationDate: expirationDate, userId: 1 }

  return NextResponse.json(
    { accessToken: JSON.stringify(pseudoToken) },
    {
      headers: {
        'Set-Cookie': `refreshToken=refreshToken${now.getMilliseconds()}; HttpOnly`,
      },
    },
  )
}
