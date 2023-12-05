import React from 'react';
import '../styles/header.css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return (
        <header>
            <div className="header-left">
                <h1>Dawid Rak</h1>
            </div>
            <div className="header-right">
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button>Get my CV</Button>
                <Button onClick={() => navigate('/projects')}>Projects</Button>
                <Button onClick={() => navigate('/contact')}>Contact</Button>
            </div>
        </header>
    );
}

export default Header;
