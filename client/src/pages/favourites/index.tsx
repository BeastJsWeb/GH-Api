import {FC} from 'react'

import { FavItem } from './components/favItem'
import { favouritesAPI } from '../../services/FavouritesService'
import { Loader } from '../../components/UI/Loader'
import { Error } from '../../components/UI/Error'

export const Favourites: FC = () => {
  const {data = [], isLoading, isError} = favouritesAPI.useGetFavouritesQuery()

  return (
    <ul className='flex flex-col gap-5' >
      {!data.length && !isLoading &&
        <li className='text-center' >No items</li>
      }
      {isLoading &&
        <li><Loader /></li>
      }
      {data.map(repo =>
        <FavItem 
          repo={repo} 
          key={repo.id} 
        />
      )}
      {isError &&
        <li><Error /></li>
      }
    </ul>
  )
}
