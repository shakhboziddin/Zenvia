import "./velocity.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 7000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 2500);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax-wrapper">
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          <span className="parallax-text">{children} </span>
          <span className="parallax-text">{children} </span>
          <span className="parallax-text">{children} </span>
          <span className="parallax-text">{children} </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <section className="app-section">
      <ParallaxText className="text_paralax" baseVelocity={-5}>The future works on autopilot.</ParallaxText>
      <ParallaxText className="text_paralax" baseVelocity={5}>You just press play.</ParallaxText>
    </section>
  );
}
