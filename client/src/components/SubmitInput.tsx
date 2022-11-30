import {FC} from 'react'

interface props {
  value: string,
  disabled?: boolean
}

export const SubmitInput: FC<props> = 
({
  value, 
  disabled
}) => {
  return (
    <input 
      name={value}
      value={value}
      type='submit'
      disabled={disabled}
      className='bg-yellow-300 text-xl p-[0.3em] cursor-pointer shadow-md 
       disabled:bg-red-200 disabled:cursor-default' 
    />
  )
}
