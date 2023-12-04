import React from 'react';
import {Button} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {GitHub} from "@mui/icons-material";
import '../styles/front.css'
import IconButton from "@mui/material-next/IconButton";

const front = () => {
    return (
        <>
            <div className='front-page'>
                <div className='btnicons'>
                    <button className='btn'>
                        <a href="https://www.linkedin.com/in/dawid-rak-158110293/" target="blank">
                            <LinkedInIcon/>
                        </a>
                    </button>
                    <button className='btn'>
                        <a href="https://github.com/DawidRaczek" target="blank">
                            <GitHub/>
                        </a>
                    </button>
                </div>
                <h1>HEY, I`M DAWID RAK</h1>
                <p>A frontend developer with expertise in JavaScript and proficiency in the React library.</p>
                <p>My passion lies in creating immersive web experiences, and I bring a strong commitment to clean,
                    efficient code and a keen eye for user-centric design to every project.</p>
                <p>With a solid foundation in frontend technologies, I thrive on transforming creative ideas into
                    seamless and responsive applications.</p>
                <Button color='success' variant='contained'>Projects</Button>
            </div>
        </>
    );
}

export default front;