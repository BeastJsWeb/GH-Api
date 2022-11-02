import {FC} from 'react'
import {Routes, Route} from 'react-router-dom'

import { PageContainer } from "../layouts/navbar/pageContainer"
import { Homepage } from "../../pages/homepage"
import { Favourites } from "../../pages/favourites"

export const PublicRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageContainer />} >
        <Route path="/" index element={<Homepage />} />
        <Route path="favourites" element={<Favourites />} />
      </Route>
    </Routes>
  )
}