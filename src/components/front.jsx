import React from 'react';
import {Button} from "@mui/material";
import '../styles/front.css'
import {useNavigate} from "react-router-dom";

const front = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='front-page'>
                <h1>HEY, I`M DAWID RAK</h1>
                <p>A frontend developer with expertise in JavaScript and proficiency in the React library.</p>
                <p>My passion lies in creating immersive web experiences, and I bring a strong commitment to clean,
                    efficient code and a keen eye for user-centric design to every project.</p>
                <p>With a solid foundation in frontend technologies, I thrive on transforming creative ideas into
                    seamless and responsive applications.</p>
                <Button color='success' variant='contained' onClick={() => navigate('/projects')}>Projects</Button>
            </div>
        </>
    );
}

export default front;