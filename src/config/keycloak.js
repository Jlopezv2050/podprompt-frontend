import Keycloak from 'keycloak-js'

const keycloakConfig = {
  url: 'https://podprompt.local/keycloak',
  realm: 'podprompt',
  clientId: 'frontend'
}

const keycloak = new Keycloak(keycloakConfig)

export default keycloak