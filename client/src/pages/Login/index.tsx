import {FC} from 'react'
import { LoginForm } from './LoginForm'

export const Login: FC = () => {
  return (
    <div className='flex flex-col gap-4 h-[70vh] justify-center'>
      <h1 className='text-center font-bold text-2xl'>
        Sign in
      </h1>
      <LoginForm/>
    </div>
  )
}
