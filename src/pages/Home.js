import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim'; // ✅ Light & stable version

const words = ["scale your business", "win more clients", "grow faster", "lead with confidence", "close more deals", "accelerate growth"];

function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine); // ✅ Uses slim engine
  };

  return (
    <div className='home_main_div' style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Dust Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 60, // 🔽 fewer particles
              density: { enable: true, value_area: 1000 }
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: {
              value: 0.10,
              random: true
            },
            size: {
              value: 1.5,
              random: true
            },
            move: {
              enable: true,
              speed: 1, // 🔼 a bit faster
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
          zIndex: 0
        }}
      />

      {/* Main Content */}
      <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="home_hero_ai">
        <div className='home_hero_ai_dot'>
          <div className='home_hero_ai_dot_inside'></div>
        </div>
        <h3>AI is the Future. Start Ahead.</h3>
      </motion.div>

      <div className="home_hero_header">
        <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className='home_hero_header_h1'>
              AI specialists trained to help you

{' '}
            <span className="word_fade_container">
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`fade_word ${index === currentWordIndex ? 'visible' : ''}`}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 0.9, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className='home_hero_header_h3'>Your unfair advantage? A team of AI assistants working nonstop.</h3>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1.2, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}>
          <Link to={'/contact'} className='home_hero_header_button'>Discover Your AI Potential
            <span className='free_call'> Book a Free Call</span></Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1.4, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}>
          <h5 className='home_hero_header_h5'> <span className='disclaimer'>⚠️ Disclaimer:</span>
            This isn’t a sales call — it’s a <span className="disclaimer">free
            </span> consultation to explore how AI can work for your business.</h5>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
