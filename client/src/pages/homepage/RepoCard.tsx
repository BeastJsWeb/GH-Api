import {FC} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { IRepo } from '../../models/repos'
import { Button, ButtonVariant } from '../../components/Button'
import { favouritesAPI } from '../../services/FavouritesService'

interface props {
  repo: IRepo,
}

export const RepoCard: FC<props> = ({repo}) => {
  const [addRepo] = favouritesAPI.useAddRepoMutation()
  const [removeRepo] = favouritesAPI.useRemoveRepoMutation()
  const {data = []} = favouritesAPI.useGetFavouritesQuery()
  
  const handleAddFavourite = async () => {
    await addRepo({
      id: repo.id ,
      url: repo.html_url,
      name: repo.full_name,
      avatar: repo.owner.avatar_url,
    }).unwrap()
  }

  const handleRemoveFavourite = async () => {
    await removeRepo(repo.id).unwrap()
  }

  const isRepoAdded = data.find(el => el.id === repo.id)

  return (
    <li className='w-calc-2 flex justify-between bg-gray-50 shadow-md hover:bg-gray-500
      hover:text-white transition-all even:ml-1' 
    >
      <a href={repo.html_url} target='blank' className='py-2 px-6'>
        <h2 className='text-lg font-bold'>{repo.full_name}</h2>
        <p className='py-4 text-sm'>
          Forks: <span className='mr-4 font-semibold'>{repo.forks}</span>
          Watchers: <span className='mr-4 font-semibold'>{repo.watchers}</span>
          Language: <span className='font-semibold'>{repo.language}</span>
        </p>
        <p className='text-sm opacity-60 py-2'>{repo.description}</p>
      </a>
      {isRepoAdded
        ? 
        <Button 
          key={repo.html_url}
          onClick={handleRemoveFavourite} 
          variant={ButtonVariant.remove} 
        >
          <FaMinus/>
        </Button>
        : 
        <Button 
          key={repo.html_url}
          onClick={handleAddFavourite} 
          variant={ButtonVariant.add}
        >
          <FaPlus/>
        </Button>
      }
    </li>
  )
}
