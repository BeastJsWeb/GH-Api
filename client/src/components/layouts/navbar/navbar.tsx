import {FC} from 'react'
import { NavLink } from 'react-router-dom'

import {FaRegStar} from 'react-icons/fa'
import { favouritesAPI } from '../../../services/FavouritesService'

export const Navbar: FC = () => {
  const {data = []} = favouritesAPI.useGetFavouritesQuery()

  const isFav = data.length ? 'text-yellow-300' : ''

  return (
    <header 
      className='flex justify-between items-center shadow-sm p-[1em] bg-gray-500 text-white' 
    > 
      <NavLink to='/' 
        className='text-2xl hover:underline' 
      >
        GitHubApi
      </NavLink>
      <NavLink to='favourites' 
        className='flex items-center text-xl gap-2 hover:underline' 
      >
        Favourites <FaRegStar size='2em' className={isFav} />
      </NavLink>
    </header>
  )
}
