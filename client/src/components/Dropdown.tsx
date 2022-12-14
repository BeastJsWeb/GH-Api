import {FC} from 'react'
import { Error } from './Error'
import { Loader } from './Loader'
import {IUser} from '../models/users'

interface DropdownProps {
  isLoading?: boolean,
  data: IUser[],
  isError?: boolean,
  onClick: (username: string) => void
}

export const Dropdown: FC<DropdownProps> = 
  ({
    isLoading, 
    data, 
    isError, 
    onClick
  }) => {
    
  return (
    <ul className='list-none absolute top-[100%] shadow-md w-full bg-white border-t 
      max-h-48 overflow-y-scroll z-10'
    >
      {!data.length && !isLoading &&
        <li className='px-2' >Users not found</li>
      }
      {isLoading && 
        <Loader/>
      }
      {data.map(user =>
        <li 
          key={user.id} 
          onClick={() => onClick(user.login)}
          className='hover:bg-gray-500 hover:text-white cursor-pointer px-2' 
        >
          {user.login}
        </li>  
      )}
      {isError && 
        <Error/>
      }
    </ul>
  )
}
