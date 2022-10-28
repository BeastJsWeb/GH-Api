import { useSearchUsersQuery, useLazyGetUserReposQuery } from '../../store/github/github.api'
import { Input } from '../../components/UI/Input'
import { useInput } from '../../hooks/useInput'
import { Dropdown } from './components/Dropdown'
import { RepoCard } from './components/RepoCard'
import { RepoOwnerCard } from './components/RepoOwnerCard'
import { Loader } from '../../components/UI/Loader'
import { Error } from '../../components/UI/Error'

export const Homepage = () => {
  const search = useInput('')
  
  const gitHubUsers = useSearchUsersQuery(search.value, {
    skip: search.value.length < 3,
    refetchOnFocus: true
  })

  const [fetchRepos, 
    {
      isLoading: areReposLoading, 
      data: repos, 
      isError: areReposError
    }
  ] = useLazyGetUserReposQuery()

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
          {...gitHubUsers} 
          onClick={handleGetRepos} 
        />
      </Input>
      <ul className='box-border w-full flex flex-wrap gap-5' >
        {areReposLoading &&
          <Loader />
        }
        <RepoOwnerCard repos={repos} />
        {repos?.map(repo =>
          <RepoCard repo={repo} key={repo.id} />
        )}
        {areReposError &&  
          <Error />
        }
      </ul>
    </>
  )
}
