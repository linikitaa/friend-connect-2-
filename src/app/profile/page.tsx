'use client'
import Image from 'next/image'
import ava from '../../shared/assets/ava.png'
import React, { useState } from 'react'
import EditProfile from '@/shared/components/EditProfile/EditProfile'

export default function ProfilePage() {
  const [name, setName] = useState('name')
  const [login, setLogin] = useState('login')
  const [email, setEmail] = useState('email')

  const changeName = (name: string) => {
    setName(name)
  }
  const changeLogin = (login: string) => {
    setLogin(login)
  }
  const changeEmail = (email: string) => {
    setEmail(email)
  }

  return (
    <div className="flex-col">
      <h1 className={'text-3xl mb-8'}>Profile</h1>
      <div className={'flex gap-20'}>
        <div>
          <Image src={ava} alt="avatar" className={'w-36 h-40'} />
        </div>
        <div>
          <p>Имя : {name}</p>
          <p>Логин : {login}</p>
          <p>e-mail : {email}</p>
        </div>
        <EditProfile
          name={name}
          email={email}
          login={login}
          changeName={changeName}
          changeLogin={changeLogin}
          changeEmail={changeEmail}
        />
      </div>
    </div>
  )
}
