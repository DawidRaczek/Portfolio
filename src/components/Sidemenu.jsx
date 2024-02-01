import LinkedInIcon from "@mui/icons-material/LinkedIn.js";
import {GitHub} from "@mui/icons-material";
import React from "react";

const SideMenu = () => {
    
    return (
        <div className='btnicons'>
            <button className='btn'>
                <a href="https://www.linkedin.com/in/dawid-rak-158110293/" target="blank">
                    <LinkedInIcon htmlColor='black'/>
                </a>
            </button>
            <button className='btn'>
                <a href="https://github.com/DawidRaczek" target="blank">
                    <GitHub htmlColor='black'/>
                </a>
            </button>
        </div>
    )
}

export default SideMenu;