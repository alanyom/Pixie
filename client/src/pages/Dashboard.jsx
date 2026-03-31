import React from 'react';

const Dashboard = ({ setView }) => {
  const PIXIE_CONFIG = { SUBSCRIPTION_FEE_USD: 5 };
  
  const stats = {
    feesSaved: 400,
    contractors: 8,
    taxAlerts: 2
  };

  const contractors = [
    { name: "Harshal", location: "Pakistan", status: "Verified", paid: 550 },
    { name: "Zaid", location: "Pakistan", status: "Verified", paid: 1200 },
    { name: "Alan", location: "USA", status: "Pending", paid: 0 }
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo" onClick={() => setView('landing')} style={{cursor:'pointer'}}>PIXIE</div>
        <nav>
            <div className="nav-item active" onClick={() => setView('dashboard')}>Dashboard</div>
            <div className="nav-item" onClick={() => setView('contractors')}>Contractors</div>
            <div className="nav-item" onClick={() => setView('taxes')}>Tax Center</div>
        </nav>
      </aside>

      <main className="content">
        <header className="dash-header">
          <h1>Welcome, Eshan</h1>
          <button className="btn-pay">Pay Team (One-Click)</button>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <label>Fees Saved</label>
            <div className="value text-green">${stats.feesSaved}</div>
            <p>vs Bank Wires</p>
          </div>
          <div className="stat-card">
            <label>Active Workers</label>
            <div className="value">{stats.contractors}</div>
            <p>Cost: ${stats.contractors * PIXIE_CONFIG.SUBSCRIPTION_FEE_USD}/mo</p>
          </div>
          <div className="stat-card alert">
            <label>Tax Compliance</label>
            <div className="value">{stats.taxAlerts} Forms Due</div>
            <p>Approaching $600 threshold</p>
          </div>
        </div>

        <section className="contractor-list">
          <h3>Recent Activity</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Corridor</th>
                <th>Status</th>
                <th>Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              {contractors.map((c, i) => (
                <tr key={i}>
                  <td><strong>{c.name}</strong></td>
                  <td>US → {c.location}</td>
                  <td><span className={`status ${c.status.toLowerCase()}`}>{c.status}</span></td>
                  <td>${c.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;