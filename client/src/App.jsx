import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js'; 
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Contractors from './pages/Contractors'; 
import TaxCenter from './pages/TaxCenter';   
import './App.css'; 

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

function App() {
  const [view, setView] = useState('landing');

  // This handles the main layout and "Routing"
  const renderView = () => {
    switch (view) {
      case 'landing':
        return <Landing setView={setView} supabase={supabase} />;
      case 'dashboard':
        return <Dashboard setView={setView} />;
      case 'contractors':
        return <Contractors setView={setView} />;
      case 'taxes':
        return <TaxCenter setView={setView} />;
      default:
        return <Landing setView={setView} supabase={supabase} />;
    }
  };

  return <div className="App">{renderView()}</div>;
}

export default App;
