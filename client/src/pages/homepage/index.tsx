import {FC} from 'react'
import { gitHubAPI } from '../../services/gitHubService'
import { Input } from '../../components/Input'
import { useInput } from '../../hooks/useInput'
import { Dropdown } from '../../components/Dropdown'
import { RepoCard } from './RepoCard'
import { RepoOwnerCard } from './RepoOwnerCard'
import { Loader } from '../../components/Loader'
import { Error } from '../../components/Error'

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
      type='text'
      placeholder='Search GitHub Users...' 
    >
      <Dropdown 
        data={users}
        isLoading={isLoading}
        isError={isError}
        onClick={handleGetRepos} 
      />
    </Input>
    <ul className='box-border w-full flex flex-wrap gap-5'>
      {areReposLoading &&
        <Loader/>
      }
      <RepoOwnerCard repos={repos}/>
      {repos.map(repo =>
        <RepoCard repo={repo} key={repo.id}/>
      )}
      {areReposError &&  
        <Error/>
      }
    </ul>
    </>
  )
}
