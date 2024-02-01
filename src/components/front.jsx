import React from 'react';
import {Button} from "@mui/material";
import '../styles/front.css'
import {useNavigate} from "react-router-dom";
import { motion } from 'framer-motion';

const front = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='front-page'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}
                    >
                    <h1>HEY, I`M DAWID RAK</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}
                    >
                <p>A frontend developer with expertise in JavaScript and proficiency in the React library.</p>
                <p>My passion lies in creating immersive web experiences, and I bring a strong commitment to clean,
                    efficient code and a keen eye for user-centric design to every project.</p>
                <p>With a solid foundation in frontend technologies, I thrive on transforming creative ideas into
                    seamless and responsive applications.</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                    }}
                    >
                    <Button color='success' variant='contained' onClick={() => navigate('/projects')}>Projects</Button>
                </motion.div>
            </div>
        </>
    );
}

export default front;