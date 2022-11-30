import {FC} from 'react'
import { AuthForm } from './AuthForm'

export const Auth: FC = () => {
  return (
    <div className='flex flex-col gap-4 h-[70vh] justify-center'>
      <h1 className='text-center font-bold text-2xl' >
        Sign up
      </h1>
      <AuthForm/>
    </div>
  )
}
