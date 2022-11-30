import {FC} from 'react'
import {FaMinus} from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import { FavouritesRepo } from './FavouriteRepo'
import { Button, ButtonVariant } from '../../components/Button'
import { useToogle } from '../../hooks/useToogle'
import { IFav } from '../../models/favourites'
import {favouritesAPI} from '../../services/FavouritesService'
import { EditModal } from './EditModal'

interface FavItemProps {
  repo: IFav
}

export const FavItem: FC<FavItemProps> = ({repo}) => {
  const toogle = useToogle()
  const [removeRepo] = favouritesAPI.useRemoveRepoMutation()
  const handleRemove = async () => await removeRepo(repo.id).unwrap()

  return (
    <>
      <FavouritesRepo 
        href={repo.url} 
        src={repo.avatar} 
        title={repo.name} 
      >
        <Button 
          onClick={toogle.handleIsActive} 
          variant={ButtonVariant.add}
        >
          <FaEdit size='1.5em'/>
        </Button>
        <Button 
          onClick={handleRemove}
          variant={ButtonVariant.remove} 
        >
          <FaMinus size='1.5em'/>
        </Button>
      </FavouritesRepo>
      {toogle.isActive &&
        <EditModal repo={repo} {...toogle}/>
      }
    </>
  )
}
