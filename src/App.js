import React, { Suspense, useEffect, useState } from 'react';
import './App.css';

// Lazy loaded components
const Home = React.lazy(() => import('./pages/Home'));
const Agents = React.lazy(() => import('./pages/Agents'));
const Velocity = React.lazy(() => import('./components/Velocity'));

function App() {
  const [loadHome, setLoadHome] = useState(false);
  const [loadAgents, setLoadAgents] = useState(false);
  const [loadVelocity, setLoadVelocity] = useState(false);

  useEffect(() => {
    setLoadHome(true);
    setTimeout(() => setLoadAgents(true), 500); // load 0.5s later
    setTimeout(() => setLoadVelocity(true), 1000); // load another 0.5s later
  }, []);

  return (
    <div className="main_div">
      <Suspense fallback={<div>Loading...</div>}>
        {loadHome && <Home />}
        <section id="/#employees">
          {loadAgents && <Agents />}
        </section>
        {/* Optional: Uncomment if you want Velocity to load after Agents */}
        {/* {loadVelocity && <Velocity />} */}
      </Suspense>
    </div>
  );
}

export default App;
