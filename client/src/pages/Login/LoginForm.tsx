import {FC} from 'react'
import { useForm } from 'react-hook-form'
import { SubmitInput } from '../../components/SubmitInput'

export const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: 'onBlur'
  })

  const onSubmit = (data: any) => {
    console.log(data)
    reset()
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col gap-1" 
    >
      <input 
        {...register('username', { 
          required: 'Name cannot be empty',
          minLength: {
            value: 4,
            message: 'Min length 4 symbols'
          } 
        })} 
        className='shadow-md p-2'
        placeholder='Name'
      />
      <div className='h-8 text-sm' ><>{errors.username?.message}</></div>
      <input 
        {...register('password', { 
          required: 'Password cannot be empty',
          minLength: {
            value: 5,
            message: 'Min length 5 symbols'
          } 
        })} 
        className='shadow-md p-2'
        placeholder='Password'
        type='password'
      />
      <div className='h-8 text-sm' ><>{errors.password?.message}</></div>
      <SubmitInput 
        value='login'
        disabled={!isValid}
      />
    </form>
  )
}
