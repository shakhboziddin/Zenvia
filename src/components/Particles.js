import React from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim'; // Light, fast version

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 60,
            density: { enable: true, value_area: 1000 }
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.1,
            random: true
          },
          size: {
            value: 1.5,
            random: true
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            outModes: { default: "out" },
            straight: false
          }
        },
        background: {
          color: "transparent"
        }
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}

export default ParticlesBackground;
