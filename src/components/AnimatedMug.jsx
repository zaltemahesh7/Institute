// import React from 'react';
// import { motion } from 'framer-motion';
import './AnimatedMug.css';

// const AnimatedMug = () => {
//   return (
//     <div className="mug-container">
//       <div className="mug">
//         <motion.div
//           className="water"
//           animate={{
//             // y: [0, -5, 0],
//             transition: {
//               duration: 0.5,
//               repeat: Infinity,
//               repeatType: "mirror"
//             }
//           }}
//         />
//         <h1 className=' flex mt-12 justify-center text-5xl'>40%</h1>
//       </div>
//     </div>
//   );
// };

// export default AnimatedMug;

import { motion, useScroll } from "framer-motion";
import Home from "../Home/Home";

function AnimatedMug() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {/* <h1>
        <code>useScroll</code> demo
      </h1> */}
      <Home />
    </>
  );
}
export default AnimatedMug;
