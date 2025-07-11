import React from 'react'
import './mission.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Mission() {
    return (
        <div className='mission_main_div'>
            {/* Main Content */}
            <div className="mission_header_main">
                <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mission_hero_ai">
                    <h3>Our Mission</h3>
                </motion.div>
            </div>
            <div className="mission_header_text">
                <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mission_header">
                    <h1 className='mission_header_h1'>We replace <span className="green2">repetitive</span> tasks with <span className="green2">AI</span></h1>
                    <p className='mission_header_p'>We eliminate repetitive tasks with AI employees, empowering your team to focus on what drives real results.</p>


                    <div className='mission_btn_main'>
                                           <motion.div initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1.2, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, ease: "easeOut" }}>
                        <Link to={'/contact'} className='mission_hero_header_button'>Discover Your AI Potential
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
                </motion.div>
            </div>
        </div>
    )
}

export default Mission
