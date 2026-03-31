import React, { useState, useEffect } from 'react';

const Landing = ({ setView, supabase }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [quote, setQuote] = useState(null);

  // --- BACKEND INTEGRATION ---
  useEffect(() => {
    // Fetches the 'Software Layer' math from your Node server
    fetch('http://localhost:5001/api/quote?amount=2000')
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.warn("Backend offline: using default mock values."));
  }, []);

  // --- WAITLIST LOGIC ---
  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    if (!supabase) {
      setStatus('Error: Database not connected.');
      return;
    }

    setStatus('Joining...');
    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (error) {
      setStatus('Error: ' + error.message);
    } else {
      setStatus('Success! You are on the list.');
      setEmail('');
    }
  };

  return (
    <div className="landing-page">
      <nav className="nav-bar">
        <div className="logo">PIXIE</div>
        <button className="btn-login" onClick={() => setView('dashboard')}>
          Enter Dashboard
        </button>
      </nav>

      <section className="hero">
        <span className="badge">Phase 1: US → Pakistan Live</span>
        <h1>PAY INTERNATIONAL <br /> <span className="accent">CONTRACTORS IN ONE CLICK.</span></h1>
        <p>
          The software layer for US startups. <strong>$5/month per worker.</strong> <br /> 
          Automated tax forms. No crypto wallets. It just works.
        </p>
        
        <div className="waitlist-container">
          <form onSubmit={handleWaitlistSubmit} className="waitlist-form">
            <input 
              type="email" 
              placeholder="Enter your work email..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">Join Waitlist</button>
          </form>
          {status && <p className="status-msg">{status}</p>}
        </div>
      </section>

      <section className="comparison">
        <h2>The No-Brainer Decision</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional Wires</th>
                <th className="highlight">Pixie</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost per Worker</td>
                <td>$50+ Fees</td>
                <td className="highlight-text">
                  {quote ? `$${quote.pixieFee}/mo` : "$5/mo"}
                </td>
              </tr>
              <tr>
                <td>Tax Compliance</td>
                <td>Manual</td>
                <td className="highlight-text">Auto 1099/1042-S</td>
              </tr>
              <tr>
                <td>Speed</td>
                <td>3-5 Days</td>
                <td className="highlight-text">
                  {quote ? quote.settlementTime : "Minutes"}
                </td>
              </tr>
              {/* Dynamic row to prove the 'Software Layer' value prop */}
              <tr>
                <td>Estimated Savings</td>
                <td>$0</td>
                <td className="highlight-text">
                  {quote ? `+$${quote.estimatedSavings}` : "Calculating..."}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Landing;