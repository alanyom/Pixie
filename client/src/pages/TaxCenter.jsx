import React from 'react';

const TaxCenter = ({ setView }) => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo" onClick={() => setView('landing')}>PIXIE</div>
        <nav>
          <div className="nav-item" onClick={() => setView('dashboard')}>Dashboard</div>
          <div className="nav-item" onClick={() => setView('contractors')}>Contractors</div>
          <div className="nav-item active">Tax Center</div>
        </nav>
      </aside>
      <main className="content">
        <header className="dash-header">
          <h1>2026 Tax Filings</h1>
        </header>
        <div className="stats-grid">
          <div className="stat-card alert">
            <label>1042-S (Foreign)</label>
            <div className="value">2 Forms</div>
            <p>Ready to file for Pakistan workers</p>
          </div>
          <div className="stat-card">
            <label>1099-NEC (US)</label>
            <div className="value">0 Forms</div>
            <p>Threshold ($600) not met</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaxCenter;