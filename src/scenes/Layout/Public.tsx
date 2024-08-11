import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { auth as AuthActions } from '../../services/Auth/AuthActions'
import { LogIn } from '../LogIn/LogIn'
import { Signup } from '../Singup/Signup'

export const Public = () => {
  const { success } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AuthActions.getUsers())
  }, [success.register])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}
