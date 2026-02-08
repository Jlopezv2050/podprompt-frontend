import Keycloak from 'keycloak-js'

const keycloakConfig = {
  url: 'https://keycloak.podprompt.local',
  realm: 'podprompt',
  clientId: 'frontend'
}

const keycloak = new Keycloak(keycloakConfig)

export default keycloak