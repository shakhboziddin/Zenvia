import React, { useRef } from 'react';
import './mission.css';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

function Mission() {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const disclaimerRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const textInView = useInView(textRef, { once: true, margin: '-100px' });
  const btnInView = useInView(btnRef, { once: true, margin: '-100px' });
  const disclaimerInView = useInView(disclaimerRef, { once: true, margin: '-100px' });

  return (
    <div className='mission_main_div'>
        <div className="elipse_bg"></div>
      {/* Header */}
      <div className="mission_header_main">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={headerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mission_hero_ai"
        >
          <h3>Our Mission</h3>
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="mission_header_text">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={textInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mission_header"
        >
          <h1 className='mission_header_h1'>
            We replace <span className="green2">repetitive</span> tasks with <span className="green2">AI</span>
          </h1>
          <p className='mission_header_p'>
            We eliminate repetitive tasks with AI employees, empowering your team to focus on what drives real results.
          </p>

          {/* Button Section */}
          <div className='mission_btn_main'>
            <motion.div
              ref={btnRef}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={btnInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link to={'/contact'} className='mission_hero_header_button'>
                Discover Your AI Potential <span className='free_call'>Book a Free Call</span>
              </Link>
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              ref={disclaimerRef}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={disclaimerInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h5 className='mission_hero_header_h5'>
                <span className='disclaimer'>⚠️ Disclaimer:</span> This isn’t a sales call —
                it’s a <span className="disclaimer">free</span> consultation to explore how AI can work for your business.
              </h5>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Mission;
