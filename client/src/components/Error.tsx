import {FC} from 'react'
import {MdHourglassDisabled} from 'react-icons/md'

export const Error: FC = () => {
  return (
    <MdHourglassDisabled 
      size='1.5em' 
      className='w-full my-4 animate-pulse' 
    />
  )
}
