import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  )
}

export default App