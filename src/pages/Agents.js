import React, { useEffect, useRef, useState } from 'react';
import './agents.css';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  HiOutlineSpeakerphone,
  HiOutlineUserGroup
} from 'react-icons/hi';
import {
  FaRobot,
  FaRocket,
  FaCalendarAlt,
  FaLightbulb
} from 'react-icons/fa';

function Agents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const [activePopup, setActivePopup] = useState(null);
  const [showAllCards, setShowAllCards] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 630);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

 const cardData = [
  {
    title: "AI Lead Outreach Automation",
    desc: "Consistently engage potential clients without manual effort.",
    popup: "Automatically reach out to your ideal clients at scale through messages or emails, even while you're busy or offline. This service brings you a steady stream of new leads every day, increases your brand visibility, and keeps your pipeline full — without you manually doing outreach."
  },
  {
    title: "Smart Scheduling & Booking Systems",
    desc: "Streamline how clients book meetings with you.",
    popup: "Let your clients schedule meetings with you instantly without the hassle of back-and-forth DMs. This system reduces missed calls, saves time, and gives your business a more professional and seamless experience — making it easier for people to work with you."
  },
  {
    title: "AI Chatbot for Websites & Socials",
    desc: "Provide instant support and capture leads 24/7.",
    popup: "Your website and social pages can now chat with your visitors 24/7. This AI-powered chatbot captures leads, answers FAQs, and guides users — helping you turn traffic into real customers, even when you're not online."
  },
  {
    title: "Automated Customer Support",
    desc: "Ensure timely and consistent responses to every inquiry.",
    popup: "Make sure every customer gets a fast and helpful response — without needing a full support team. Automated replies handle the repetitive questions, improve your response times, and keep customers happy while you focus on the bigger picture."
  },
  {
    title: "Task & Reminder Automation",
    desc: "Automate follow-ups, deadlines, and recurring tasks.",
    popup: "Forget worrying about forgetting. We build systems that remind you or your team about follow-ups, deadlines, or recurring tasks — so you stay consistent, reliable, and stress-free without checking your notes every hour."
  },
  {
    title: "CRM & Form Integrations",
    desc: "Capture and organize client data automatically.",
    popup: "Whenever someone fills out a form, their info is automatically stored and organized for you. This means no more lost leads, messy spreadsheets, or manual copy-paste — everything is structured and ready for you to take action."
  },
  {
    title: "AI Personal Assistant Systems",
    desc: "Delegate repetitive tasks to a digital assistant.",
    popup: "It’s like having a smart assistant who never sleeps. You’ll get a digital system that helps you manage tasks, send updates, track progress, and stay on top of everything — freeing up your mental space to focus on growth."
  },
  {
    title: "Custom Workflow Automations",
    desc: "Integrate and automate your daily business operations.",
    popup: "We connect and automate your everyday processes — from client onboarding to order management to follow-up emails. Everything runs behind the scenes, saving you hours, reducing human error, and making your business feel 10x more efficient."
  },
];

  const icons = [
    <HiOutlineSpeakerphone />,
    <FaCalendarAlt />,
    <FaRobot />,
    <FaRocket />,
    <FaLightbulb />,
    <HiOutlineUserGroup />,
    <FaLightbulb />,
    <FaLightbulb />,
  ];

  const visibleCards = isMobile && !showAllCards ? cardData.slice(0, 2) : cardData;
useEffect(() => {
  document.body.style.overflow = activePopup !== null ? 'hidden' : 'auto';
}, [activePopup]);
 return (
  <>
    <div className='agent'>
      <div className='elipse_div'></div>

      <div className='service_header_main'>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.3, ease: "easeOut" }
            }
          }}
          className="service_hero_ai"
        >
          <div className='service_hero_ai_dot'>
            <div className='service_hero_ai_dot_inside'></div>
          </div>
          <h3>Our Services.</h3>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" }
          }
        }}
        className="service_hero_header"
      >
        <h1>
          Save <span className='green'>Time</span> Managing Your <span className="green">Business</span> With <span className='signature-underline'>Our Best Services</span>
        </h1>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
          visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.5, ease: "easeOut" }
          }
        }}
        className="service_hero_cards"
      >
        {visibleCards.map((card, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
          >
            <div className="card_icon">{icons[i]}</div>
            <div className="card_content">
              <h1 className='card_content_h1'>{card.title}</h1>
              <p className='card_content_p'>{card.desc}</p>
              <button className='card_content_button' onClick={() => setActivePopup(i)}>
                What’s Inside
              </button>
            </div>
          </motion.div>
        ))}

        {isMobile && !showAllCards && (
          <button className="show_more_button" onClick={() => setShowAllCards(true)}>
            Show More
          </button>
        )}
      </motion.div>
    </div>

    {/* FIXED POPUP OUTSIDE MAIN CONTAINER */}
    {activePopup !== null && (
      <div className="popup-overlay" onClick={() => setActivePopup(null)}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="popup_close" onClick={() => setActivePopup(null)}>×</button>
          <div className="popup_header">
            <div className="card_icon">{icons[activePopup]}</div>
            <h1 className="card_content_popup_h1">{cardData[activePopup].title}</h1>
          </div>
          <p className="card_content_popup_p">{cardData[activePopup].popup}</p>
        </div>
      </div>
    )}
  </>
);
}

export default Agents;
