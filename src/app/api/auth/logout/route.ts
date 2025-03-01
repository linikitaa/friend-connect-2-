import { NextResponse } from 'next/server'

export async function DELETE(req: Request) {
  return NextResponse.json(
    { message: 'Logged out' },
    {
      headers: {
        'Set-Cookie': 'refreshToken=; HttpOnly; Max-Age=0;',
      },
    },
  )
}
