import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Input, FormLabel, Textarea, Button } from '@chakra-ui/react';

const containerVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  show: {
    x: '0vw',
    opacity: 1,
    transition: { delay: 0.5, ease: 'easeInOut' },
  },
};

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <motion.form
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="form"
        >
          <div>
            <FormLabel mb="5px">Name</FormLabel>
            <Input type="text" mb="10px" />
          </div>
          <div>
            <FormLabel mb="5px">Enter your email</FormLabel>
            <Input type="text" mb="10px" />
          </div>
          <div>
            <FormLabel mb="5px">Message</FormLabel>
            <Textarea width="100%" height="100px" mb="15px" />
          </div>
          <Link className="link" to="/">
            <Button colorScheme="blackAlpha">Submit</Button>
          </Link>
        </motion.form>
      )}
    </>
  );
};

export default Modal;
