import {FC} from 'react'

import { Button, ButtonVariant } from '../../../components/UI/Button'
import {FaMinus} from 'react-icons/fa/index'
import { IFav } from '../../../models/fav'
import {favouritesAPI} from '../../../services/FavouritesService'

interface FavItemProps {
  repo: IFav
}

export const FavItem: FC<FavItemProps> = ({repo}) => {
  const [removeRepo] = favouritesAPI.useRemoveRepoMutation()
  

  const handleRemove = async () => {
    await removeRepo(repo.id).unwrap()
  }
  
  return (
    <li className="flex justify-between" > 
      <a 
        href={repo.url} 
        target='blank' 
        className='flex h-11 gap-4 items-center bg-slate-100 hover:bg-slate-500
          hover:text-white w-full shadow-md leading-10' 
      >
        <img 
          src={repo.avatar} 
          alt='' width={40} height={40} 
          className='w-auto h-full object-cover'
        />
        {repo.name}
      </a>
      <Button 
        onClick={handleRemove}
        variant={ButtonVariant.remove} 
      >
        <FaMinus size='1.5em' />
      </Button>
    </li>
  )
}
