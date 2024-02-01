import React, { useState } from "react";
import '../styles/contact.css';
import { Button, Tooltip } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn.js";
import { Email, GitHub } from "@mui/icons-material";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
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
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
