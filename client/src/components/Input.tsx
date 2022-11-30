import {FC, ChangeEventHandler} from 'react'
import {DebounceInput} from 'react-debounce-input'

interface inputProps {
  value: string,
  type: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  children?: JSX.Element,
  placeholder: string
}

export const Input: FC<inputProps> = 
  ({
    type,
    value, 
    onChange, 
    placeholder, 
    children
  }) => {
    
  return (
    <div className='relative flex w-full'>
      <DebounceInput 
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        minLength={3}
        debounceTimeout={500}
        className='shadow-md w-full p-2 focus:outline-none focus:shadow-blue-200'
      />
      {value && children}
    </div>
  )
}
