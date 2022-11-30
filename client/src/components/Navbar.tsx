import {FC} from 'react'
import { NavLink } from 'react-router-dom'
import {FaRegStar} from 'react-icons/fa'
import { favouritesAPI } from '../services/FavouritesService'

export const Navbar: FC = () => {
  const {data = []} = favouritesAPI.useGetFavouritesQuery()
  const isFav = data.length ? 'text-yellow-300' : ''

  return (
    <header className='flex justify-between items-center shadow-sm p-[1em] bg-gray-500 text-white'> 
      <div className='flex gap-4' >
        <NavLink to='/' className='text-2xl hover:underline'>
          GitHubApi
        </NavLink>
        <a href='http://localhost:3002/docs' 
          target='blank' 
          className='text-2xl hover:underline'
        >
          SwaggerApi
        </a>
      </div>
      <div className='flex gap-4'>
        <NavLink to='auth' className='text-2xl hover:underline'>
          Sign up
        </NavLink>
        <NavLink to='login' className='text-2xl hover:underline'>
        Sign in
        </NavLink>
      </div>
      <NavLink to='favourites' className='flex items-center text-2xl gap-2 hover:underline'>
        Favourites 
        <FaRegStar size='2em' className={isFav}/>
      </NavLink>
    </header>
  )
}
