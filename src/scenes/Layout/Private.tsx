import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Dashboard } from '../Dashboard/Dashboard'

export const Private = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}
