import {FC} from 'react'
import { FavItem } from './FavItem'
import { favouritesAPI } from '../../services/FavouritesService'
import { Loader } from '../../components/Loader'
import { Error } from '../../components/Error'
import { Button, ButtonVariant } from '../../components/Button'

export const Favourites: FC = () => {
  const {data: favRepos = [], isLoading, isError} = favouritesAPI.useGetFavouritesQuery()
  const [removeAll] = favouritesAPI.useRemoveAllMutation()
  const handleRemoveAll = async () => await removeAll().unwrap()

  return (
    <>
      {favRepos.length > 2 &&
        <Button 
          onClick={handleRemoveAll}
          variant={ButtonVariant.remove}
        >
          Remove All GitHub repos
        </Button>
      }
      {isLoading && <Loader/>}
      {isError && <Error/>}
      <ul className='flex flex-col gap-5'>
        {!favRepos.length && !isLoading &&
          <li className='text-center' >No items</li>
        }
        {favRepos.map(repo =>
          <FavItem 
            repo={repo} 
            key={repo.id} 
          />
        )}
      </ul>
    </>
  )
}
