import {Outlet} from 'react-router-dom'

import { Navbar } from './navbar'

export const PageContainer = () => {
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
