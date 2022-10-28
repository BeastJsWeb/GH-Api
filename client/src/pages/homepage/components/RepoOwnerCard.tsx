
import {FC} from 'react'
import { IRepo } from '../../../models/repos'

interface repoCardProps {
  repos: IRepo[] | undefined
}

export const RepoOwnerCard: FC<repoCardProps> = ({repos}) => {
  if (!repos?.length) return null
  
  return (
    <li 
      className='w-full h-40 flex items-center gap-8 p-2 bg-gray-500 text-white mb-10' 
    >
      <img 
        src={repos[0].owner?.avatar_url} 
        alt='' width={40} height={40} 
        className='w-auto h-full object-cover'
      />
      <div>
        <h2 className='text-4xl font-bold' >{repos[0].owner?.login}</h2>
        <p>{repos[0].owner?.type}</p>
        Repositories: <span>{repos.length} / 30</span>
      </div>
    </li>
  )
}
