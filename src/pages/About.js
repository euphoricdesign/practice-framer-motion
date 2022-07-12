import React from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import Titan from '../components/Titan';

const containerVariants = {
  hidden: {
    opacity:0,
    y:"50vh"
  },
  show: {
    opacity:1,
    y:0,
    transition: {
      type: "spring",
      stiffness: 90,
    },
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: "easeInOut",
      duration: 0.5
    }
  }
};

const About = () => {
  return (
    <motion.div
      className='about-container' 
      variants={containerVariants} 
      initial="hidden" 
      animate="show"
      exit="exit"
    >
      <h1>About</h1>
      <div className='about-desc'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, facere optio eaque voluptatem tenetur officia modi
          praesentium laborum assumenda excepturi iste iure dolore sapiente qui quasi at commodi itaque error sint animi illum
          et ipsa. Quasi veniam dolores mollitia animi ipsa, earum dolorem dolore modi fuga tenetur voluptatibus maiores exerc?
        </p>
        <Titan />
      </div>
      <motion.h1
        initial={{y: -10}}
        animate={{
          y: 10,
          transition: {
            duration: 1,
            ease:"easeIn",
            repeat: Infinity,
            repeatType: "reverse"
          },
        }}
      >
        <Link className='link' to="/newsletter">&#8659;</Link>
      </motion.h1>
    </motion.div>
  )
}

export default About