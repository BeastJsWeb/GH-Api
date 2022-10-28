import {FC} from 'react'

import { Button, ButtonVariant } from '../../../components/UI/Button'
import {FaMinus} from 'react-icons/fa/index'
import { useActions } from '../../../hooks/useActions'

interface FavImemProps {
  repo: string
}

export const FavItem: FC<FavImemProps> = ({repo}) => {
  const {removeFavourite} = useActions()
  
  return (
    <li 
      key={repo} 
      className="flex justify-between items-center" 
    > <a 
        href={repo} 
        target='blank' 
        className='
          bg-slate-100 hover:bg-slate-500 hover:text-white w-full shadow-md leading-10 px-4
        ' 
      >{repo}</a>
      <Button 
        onClick={() => removeFavourite(repo)}
        variant={ButtonVariant.remove} 
      >
        <FaMinus size='1.5em' />
      </Button>
    </li>
  )
}
