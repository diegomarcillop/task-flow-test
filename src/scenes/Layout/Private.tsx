import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { auth as AuthActions } from '../../services/Auth/AuthActions'
import { Dashboard } from '../Dashboard/Dashboard'

export const Private = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AuthActions.getUsers())
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
