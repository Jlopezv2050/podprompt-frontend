import { useEffect, useState } from 'react'
import keycloak from '../config/keycloak'

let keycloakInitialized = false

function PrivateRoute({ children }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!keycloakInitialized) {
      keycloakInitialized = true
      
      console.log('Initializing Keycloak...')
      
      keycloak.init({ onLoad: 'login-required' })
        .then((auth) => {
          console.log('Keycloak initialized. Authenticated:', auth)
          setAuthenticated(auth)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Keycloak init error:', error)
          setLoading(false)
        })
    }
  }, [])

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading authentication...</div>
  }

  return authenticated ? children : (
    <div style={{ padding: '20px' }}>
      <h1>Not authenticated</h1>
      <p>Keycloak is not running yet. Will be deployed to Kubernetes later.</p>
    </div>
  )
}

export default PrivateRoute