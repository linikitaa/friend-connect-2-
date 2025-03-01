'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Label } from '@/shared/ui/label'
import { Input } from '@/shared/ui/input'
import { useAuth } from '@/store/AuthContext'

interface IFormInput {
  email: string
  password: string
  rememberMe: boolean
}

export default function RegistrationForm() {
  const auth = useAuth()
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = () => {
    // e.preventDefault()
    // auth.register()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter your email and password</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                E-mail
              </Label>
              <Input
                {...register('email')}
                id="email"
                defaultValue="free@samuraijs.com"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input
                {...register('password')}
                id="password"
                defaultValue="free"
                className="col-span-3"
              />
            </div>
            <div className="flex gap-2">
              <Label htmlFor="rememberMe" className="text-sm  leading-none ">
                Remember me
              </Label>
              <input type="checkbox" {...register('rememberMe')} />
            </div>
          </div>

          <DialogFooter>
            <Input type="submit" value={'Register'} />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
