import {FC} from 'react'
import {FaSpinner} from 'react-icons/fa'

export const Loader: FC = () => {
  return (
    <FaSpinner 
      size='1.5em' 
      className='w-full my-4 animate-spin' 
    />
  )
}
