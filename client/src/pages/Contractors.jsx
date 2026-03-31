import React from 'react';

const Contractors = ({ setView }) => {
  const workers = [
    { name: "Harshal", email: "h@pixie.com", status: "Verified", form: "W-8BEN", country: "PK" },
    { name: "Zaid", email: "z@pixie.com", status: "Verified", form: "W-8BEN", country: "PK" },
    { name: "Alan", email: "a@pixie.com", status: "Pending", form: "W-9", country: "US" },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo" onClick={() => setView('landing')} style={{cursor:'pointer'}}>PIXIE</div>
            <nav>
                <div className="nav-item" onClick={() => setView('dashboard')}>Dashboard</div>
                <div className="nav-item active" onClick={() => setView('contractors')}>Contractors</div>
                <div className="nav-item" onClick={() => setView('taxes')}>Tax Center</div>
            </nav>
        </aside>
      <main className="content">
        <header className="dash-header">
          <h1>Team Management</h1>
          <button className="btn-primary">+ Add Contractor</button>
        </header>
        <div className="contractor-list">
          <table>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Tax Form</th><th>Compliance</th></tr>
            </thead>
            <tbody>
              {workers.map((w, i) => (
                <tr key={i}>
                  <td><strong>{w.name}</strong></td>
                  <td>{w.email}</td>
                  <td>{w.form}</td>
                  <td><span className={`status ${w.status.toLowerCase()}`}>{w.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Contractors;