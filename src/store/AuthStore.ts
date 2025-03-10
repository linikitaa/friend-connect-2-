import { makeAutoObservable, runInAction } from 'mobx'

interface IUserResponse {
  data: {
    id: number
    email: string
    login: string
  }
  token: string
}
// interface IUserRequest {
//   login: string
//   email: string
//   password: string
//   remember?: boolean
// }

export const ACCESS_TOKEN = 'access-token'

class AuthStore {
  user: IUserResponse | null = null
  token: string | null = sessionStorage.getItem(ACCESS_TOKEN)
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  async sigIn(
    login: string,
    email: string,
    password: string,
    remember?: boolean,
  ) {
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, email, password, remember }),
        credentials: 'include',
      })

      if (!response.ok) throw new Error('Ошибка регистрации')

      const data = await response.json()
      console.log('data.token', data.accessToken)
      runInAction(() => {
        this.token = data.accessToken
        this.user = data
        this.isAuth = true
      })
      sessionStorage.setItem(ACCESS_TOKEN, data.accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  async login(email: string, password: string) {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      })

      if (!response.ok) throw new Error('Ошибка входа')

      const data = await response.json()
      this.token = data.accessToken
      runInAction(() => {
        this.user = data
        this.isAuth = true
      })
      sessionStorage.setItem(ACCESS_TOKEN, data.accessToken)
    } catch (error) {
      console.error(error)
    }
  }

  async logout() {
    this.token = null
    this.user = null
    this.isAuth = false
    sessionStorage.removeItem(ACCESS_TOKEN)
  }

  async checkAuth() {
    this.token = sessionStorage.getItem(ACCESS_TOKEN)
    if (!this.token) return
    try {
      const response = await fetch('http://localhost:8080/api/auth/me', {
        headers: { Authorization: `Bearer ${this.token}` },
        credentials: 'include',
      })
      if (!response.ok) throw new Error('Не авторизован')
      const data = await response.json()
      runInAction(() => {
        this.user = data
        this.isAuth = true
      })
    } catch (error) {
      this.isAuth = false
      console.log(error)
      this.logout()
    }
  }
}

const authStore = new AuthStore()
export default authStore
