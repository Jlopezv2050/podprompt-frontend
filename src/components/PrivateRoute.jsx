import { useEffect, useState } from 'react'
import keycloak from '../config/keycloak'

let keycloakInitialized = false

function PrivateRoute({ children }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!keycloakInitialized) {
      keycloakInitialized = true
      
      keycloak.init({ onLoad: 'check-sso' })
        .then((auth) => {
          setAuthenticated(auth)
          setLoading(false)
        })
        .catch(() => {
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