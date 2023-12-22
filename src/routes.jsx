import { Routes, Route } from 'react-router-dom'
import Main from './App/AppMain'
import TrackList from './TrackList/List'
import MyPersonality from './MyPlaylist/MyPersonality'
import NotFound from '../src/404/NotFound'
import Log from './Login/Login'
import Reg from './Reg/Reg'
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRoutes = () => {
  
  const token = document.cookie.includes('token');
  
  return (
    <Routes>
      <Route path="/login" element={<Log/>} />
      <Route path="/registration" element={<Reg/>} />
      <Route element={<ProtectedRoute redirectPath="/login" isAllowed= { token } />}>
        <Route path="/favorites" element={<MyPersonality/>} />
        <Route path="/" element={<Main />} />
        <Route path="/category/:id" element={<TrackList/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
