import keycloak from '../config/keycloak'

function Dashboard() {
  const handleLogout = () => {
    keycloak.logout({ redirectUri: 'https://localhost:5173' })
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Dashboard</h1>
        <button 
          onClick={handleLogout}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Logout
        </button>
      </div>
      
      <p>Welcome to your protected dashboard!</p>
      
      <div style={{ marginTop: '20px' }}>
        <div style={{ 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          marginBottom: '10px'
        }}>
          <h3>📊 Metric 1</h3>
          <p>Value: 1,234</p>
        </div>
        
        <div style={{ 
          padding: '20px', 
          border: '1px solid #ddd', 
          borderRadius: '8px'
        }}>
          <h3>💰 Metric 2</h3>
          <p>Value: $5,678</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard