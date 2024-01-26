import React, { useState } from "react";
import '../styles/contact.css';
import { Button, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn.js";
import { Email, GitHub } from "@mui/icons-material";

const Contact = () => {
    const linkStyle = { textDecoration: 'none', color: 'white' };
    const [isCopiedTooltipOpen, setIsCopiedTooltipOpen] = useState(false);

    const copyEmailToClipboard = () => {
        const emailElement = document.createElement("textarea");
        emailElement.value = "dawidrak.contact@gmail.com";
        document.body.appendChild(emailElement);

        emailElement.select();
        document.execCommand("copy");

        document.body.removeChild(emailElement);

        setIsCopiedTooltipOpen(true);
        setTimeout(() => {
            setIsCopiedTooltipOpen(false);
        }, 4000);
    };

    return (
        <>
            <div className='contact-page'>
                <div className='container'>
                    <h1 className='contact-title'>Contact me</h1>
                    <Tooltip title="Click to copy email" placement="top">
                    <Tooltip open={isCopiedTooltipOpen} title="Copied to clipboard" placement="top">
                        <span style={{ display: 'flex' }}></span>
                    </Tooltip>
                        <Button className='contactbtn' variant='contained' color='success' onClick={copyEmailToClipboard}>
                            E-mail<Email htmlColor='white' />
                        </Button>
                    </Tooltip>
                        <Button className='contactbtn' variant='contained' component="a" href="https://www.linkedin.com/in/dawid-rak-158110293/" target="_blank" style={linkStyle}>
                            LinkedIn<LinkedInIcon htmlColor='white' />
                        </Button>
                        <Button className='contactbtn' variant='contained' color='secondary' component="a" href="https://github.com/DawidRaczek" target="_blank" style={linkStyle}>
                            GitHub<GitHub htmlColor='white' />
                        </Button>
                </div>
            </div>
        </>
    )
}

export default Contact;
