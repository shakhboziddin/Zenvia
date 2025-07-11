import React, { Suspense } from 'react';
import './App.css';
import { useInView } from 'react-intersection-observer';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const Agents = React.lazy(() => import('./pages/Agents'));
const Velocity = React.lazy(() => import('./components/Velocity'));
const Mission = React.lazy(()=> import('./components/Mission'))

function App() {
  const [homeRef, homeInView] = useInView({ triggerOnce: true });
  const [agentsRef, agentsInView] = useInView({ triggerOnce: true });
  const [velocityRef, velocityInView] = useInView({ triggerOnce: true });
  const [missionRef, missionInView] = useInView({triggerOnce: true});

  return (
    <div className='main_div'>

      {/* Home Section */}
      <div ref={homeRef}>
        {homeInView && (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        )}
      </div>

      {/* Velocity Section (optional, currently commented) */}
      {/* 
      <div ref={velocityRef}>
        {velocityInView && (
          <Suspense fallback={<div>Loading Velocity...</div>}>
            <Velocity />
          </Suspense>
        )}
      </div>
      */}

      {/* Agents Section */}
      <section id='/#employees' ref={agentsRef}>
        {agentsInView && (
          <Suspense fallback={<div>Loading Agents...</div>}>
            <Agents />
          </Suspense>
        )}
      </section>
            <section id='/#mission' ref={missionRef}>
        {agentsInView && (
          <Suspense fallback={<div>Loading Mission...</div>}>
            <Mission />
          </Suspense>
        )}
      </section>
    </div>
  );
}

export default App;
