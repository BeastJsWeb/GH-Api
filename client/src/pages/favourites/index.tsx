import { useReduxSelector } from '../../hooks/useReduxSelector'
import { FavItem } from './components/favItem'
//import { useGetFavouritesQuery } from '../../store/json-server/jsonServer.api'

export const Favourites = () => {
  const {favourites} = useReduxSelector(state => state.github)
  //const {data, isLoading} = useGetFavouritesQuery()

  //console.log(data)
  if (!favourites.length) return <p className='text-center' >No items</p>

  return (
    <>
      <ul className='flex flex-col gap-5' >
        {favourites?.map(repo =>
          <FavItem repo={repo} key={repo} />
        )}
      </ul>
    </>
  )
}
