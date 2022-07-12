import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

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

const Newletter = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div 
      className='newsletter-container'
      variants={containerVariants} 
      initial="hidden" 
      animate="show"
      exit="exit"
    >
      <h1>¿Desea recibir más información?</h1>
      <div>
        <button className='newsletter-button' onClick={() => setShowModal(true)}>Sí, deseo saber más</button>
        <Link className='link' to='/'>
          <button className='newsletter-button'>No, llévame a la home</button>
        </Link>
      </div>
      <Modal showModal={showModal} />
    </motion.div>
  )
}

export default Newletter