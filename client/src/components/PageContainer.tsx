import {FC} from 'react'
import {Outlet} from 'react-router-dom'
import {Navbar} from './Navbar'

export const PageContainer: FC = () => {
  return (
    <>
      <Navbar />
      <main className='h-full w-full flex flex-col justify-center m-auto p-[2em] gap-8 max-w-5xl'>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
