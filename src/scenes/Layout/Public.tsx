import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { LogIn } from '../LogIn/LogIn'
import { Signup } from '../Singup/Signup'

export const Public = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}
