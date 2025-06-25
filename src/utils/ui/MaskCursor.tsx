'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Trail {
  id: number;
  x: number;
  y: number;
}

const MouseMoveFluidCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 70, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 20 });

  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setTrails((prev) => [
        ...prev.slice(-20),
        { id: Date.now(), x: e.clientX, y: e.clientY },
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-48 h-48 pointer-events-none mix-blend-lighten"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-full h-full  blur-2xl"
          animate={{
            borderRadius: [
              '42% 58% 35% 65% / 60% 30% 70% 40%',
              '60% 40% 65% 35% / 35% 60% 30% 70%',
              '42% 58% 35% 65% / 60% 30% 70% 40%',
            ],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
{trails.map((trail) => (
  <motion.div
    key={trail.id}
    className="fixed z-[9998] w-6 h-6 pointer-events-none blur-md bg-gradient-to-br from-[#ffffff40] via-[#ffffff30] to-transparent"
    initial={{
      x: trail.x,
      y: trail.y,
      opacity: 1,
      scale: 1,
      rotate: 45,
    }}
    animate={{
      x: trail.x + Math.random() * 20 - 10, 
      y: trail.y - 60, 
      opacity: 0,
      scale: 2.5,
      rotate: Math.random() * 90 - 45,
      borderRadius: [
        '50% 50% 50% 50%',
        '60% 40% 70% 30%',
        '40% 60% 30% 70%',
        '50% 50% 50% 50%',
      ],
    }}
    transition={{
      duration: 0.6,
      ease: 'easeOut',
    }}
  />
))}
    </>
  );
};

export default MouseMoveFluidCursor;
