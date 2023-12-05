import React from "react";
import '../styles/contact.css';
import {Button} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn.js";
import {GitHub} from "@mui/icons-material";

const Contact = () => {
    const linkStyle = { textDecoration: 'none', color: 'white' };

    return (
        <>
            <div className='contact-page'>
                <div className='container'>
                    <h1 className='contact-title'>Contact me</h1>
                    <p className='contact-email'>E-mail: dawid.raczek6666@gmail.com</p>
                    <Button variant='contained' component="a" href="https://www.linkedin.com/in/dawid-rak-158110293/" target="blank" style={linkStyle}>
                        LinkedIn<LinkedInIcon htmlColor='white'/>
                    </Button>
                    <Button variant='contained' color='secondary' component="a" href="https://github.com/DawidRaczek" target="blank" style={linkStyle}>
                        GitHub<GitHub htmlColor='black'/>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Contact;
