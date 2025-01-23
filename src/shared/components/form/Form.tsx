'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/ui/dialog'
import { Button } from '@/shared/ui/button'
import { Label } from '@/shared/ui/label'
import { Input } from '@/shared/ui/input'

interface IFormInput {
  email: string
  password: string
}

export default function LoginForm() {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // e.preventDefault()
    console.log(data.email, data.password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary">Login</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Enter your email and password</DialogTitle>
            <DialogDescription>Email: free@samuraijs.com</DialogDescription>
            <DialogDescription>Password: free</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                E-mail
              </Label>
              <Input
                {...register('email')}
                id="email"
                defaultValue="Pedro Duarte"
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
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Input
              type="submit"
              value={'Login'}
              onClick={handleSubmit(onSubmit)}
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}
