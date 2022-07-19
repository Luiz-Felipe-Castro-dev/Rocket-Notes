import {Routes,Route} from 'react-router-dom'

import {MoviePreview} from '../pages/MoviePreview'

import {Profile} from '../pages/Profile'

import {CreateMovie} from '../pages/CreateMovie'

import {Home} from '../pages/Home'

export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/createMovie' element={<CreateMovie/>} />
      <Route path='/moviePreview/:id' element={<MoviePreview/>} />
    </Routes>
  )
}