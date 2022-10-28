import {FC} from 'react'

import { IRepo } from '../../../models/repos'
import {useActions} from '../../../hooks/useActions'
import { Button, ButtonVariant } from '../../../components/UI/Button'
import { useReduxSelector } from '../../../hooks/useReduxSelector'
import {FaPlus, FaMinus} from 'react-icons/fa/index'

interface repoCardProps {
  repo: IRepo
}

export const RepoCard: FC<repoCardProps> = ({repo}) => {
  const {addFavourite, removeFavourite} = useActions()

  const {favourites} = useReduxSelector(state => state.github)

  const handleAddFavourite = () => addFavourite(repo.html_url)

  const handleRemoveFavourite = () => removeFavourite(repo.html_url)

  return (
    <li 
      className='w-calc-2 flex justify-between bg-gray-50 shadow-md hover:bg-gray-500
        hover:text-white transition-all even:ml-1' 
    >
      <a href={repo.html_url} target='blank' className='py-2 px-6' >
        <h2 className='text-lg font-bold' >{repo.full_name}</h2>
        <p className='py-4 text-sm' >
          Forks: <span className='mr-4 font-semibold' >{repo.forks}</span>
          Watchers: <span className='mr-4 font-semibold' >{repo.watchers}</span>
          Language: <span className='font-semibold' >{repo.language}</span>
        </p>
        <p className='text-sm opacity-60 py-2' >{repo?.description}</p>
      </a>
      {favourites.includes(repo.html_url)
        ? 
        <Button 
          onClick={handleRemoveFavourite} 
          variant={ButtonVariant.remove} 
        ><FaMinus /></Button>
        : 
        <Button 
          onClick={handleAddFavourite} 
          variant={ButtonVariant.add}
        ><FaPlus /></Button>
      }
    </li>
  )
}
