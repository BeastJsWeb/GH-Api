import {FC} from 'react'

import { gitHubAPI } from '../../services/gitHubService'
import { Input } from '../../components/UI/Input'
import { useInput } from '../../hooks/useInput'
import { Dropdown } from '../../components/Dropdown'
import { RepoCard } from './components/RepoCard'
import { RepoOwnerCard } from './components/RepoOwnerCard'
import { Loader } from '../../components/UI/Loader'
import { Error } from '../../components/UI/Error'

export const Homepage: FC = () => {
  const search = useInput('')
  
  const {
    data: users = [], 
    isLoading, 
    isError
  } = gitHubAPI.useSearchUsersQuery(search.value, 
    {
      skip: search.value.length < 3,
      refetchOnFocus: true
    }
  )

  const [fetchRepos, 
    {
      data: repos = [],
      isLoading: areReposLoading,  
      isError: areReposError
    }
  ] = gitHubAPI.useLazyGetUserReposQuery()

  const handleGetRepos = (username: string) => {
    fetchRepos(username)
    search.setValue('')
  }

  return (
    <>
      <Input 
        {...search} 
        placeholder='Search GitHub Users...' 
      >
        <Dropdown 
          data={users}
          isLoading={isLoading}
          isError={isError}
          onClick={handleGetRepos} 
        />
      </Input>
      <ul className='box-border w-full flex flex-wrap gap-5' >
        {areReposLoading &&
          <Loader />
        }
        <RepoOwnerCard repos={repos} />
        {repos.map(repo =>
          <RepoCard repo={repo} key={repo.id} />
        )}
        {areReposError &&  
          <Error />
        }
      </ul>
    </>
  )
}
