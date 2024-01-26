import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseConfig from '../firebaseconfig';

const Header = () => {
    const navigate = useNavigate();
    const [cvDownloadUrl, setCvDownloadUrl] = useState(null);

    useEffect(() => {
        const storage = getStorage();

        const cvRef = ref(storage, 'Dawid Rak CV PL.pdf'); 
        getDownloadURL(cvRef)
            .then((url) => {
                setCvDownloadUrl(url);
            })
            .catch((error) => {
                console.error("Error getting CV download URL: ", error);
            });
    }, []);

    const handleDownloadCV = () => {
        if (cvDownloadUrl) {
            const link = document.createElement('a');
            link.href = cvDownloadUrl;
            link.download = 'Dawid_Rak_CV_PL.pdf'; 
            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
        }
    };

    return (
        <header>
            <div className="header-left">
                <div className='picture'></div>
                <h1>Dawid Rak</h1>
            </div>
            <div className="header-right">
                <Button onClick={() => navigate('/')}>Home</Button>
                <Button onClick={handleDownloadCV}>Get my CV</Button>
                <Button onClick={() => navigate('/projects')}>Projects</Button>
                <Button onClick={() => navigate('/contact')}>Contact</Button>
            </div>
        </header>
    );
}

export default Header;
