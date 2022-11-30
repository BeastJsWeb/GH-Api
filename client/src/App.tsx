import {FC} from 'react'
import {
  RouterProvider, 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom'

import { PageContainer } from "./components/PageContainer"
import { Homepage } from "./pages/Homepage"
import { Favourites } from './pages/Favourites'
import { NotFoundPage } from './pages/notFoundPage'
import { Auth } from './pages/Auth'
import { Login } from './pages/Login'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<PageContainer/>}>
    <Route index element={<Homepage/>}/>
    <Route path="auth" element={<Auth/>}/>
    <Route path="login" element={<Login/>} />
    <Route path="favourites" element={<Favourites/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
  </Route>
))

export const App: FC = () => {
  return (
    <RouterProvider router={router}/>
  )
}
