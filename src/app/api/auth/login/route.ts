import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  console.log('LOGIN ENDPOINT, request body:', body)

  // Здесь необходимо проверить введённые данные, например, найти пользователя в БД и сверить хеш пароля.
  // Для демонстрации возвращаем псевдотокен.
  const now = new Date()
  const expirationDate = new Date(now.getTime() + 0.5 * 60 * 1000) // 30 минут или сек. по вашему выбору
  const pseudoToken = { expirationDate: expirationDate, userId: 1 }

  return NextResponse.json(
    { accessToken: JSON.stringify(pseudoToken) },
    {
      headers: { 'Set-Cookie': 'refreshToken=refreshToken1; HttpOnly' },
    },
  )
}
