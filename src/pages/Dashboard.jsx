function Dashboard() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
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