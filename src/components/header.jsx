import React from 'react';
import '../styles/header.css'
import {Button} from "@mui/material";

const header = () => {
    return (
        <header>
            <div className="header-left">
                <h1>Dawid Rak</h1>
            </div>
            <div className="header-right">
                <Button>Home</Button>
                <Button>Get my CV</Button>
                <Button>Projects</Button>
                <Button>Contact</Button>
            </div>
        </header>
    );
}

export default header;
