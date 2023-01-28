import React from "react";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import sm from '../../img/sm.png'
import info from '../../img/info.png'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">


                    <div className="col">
                        <img src={info} alt="Info" />
                        <ul className="list-unstyled">
                            <li>
                                <a href="/info">Om oss</a>
                            </li>                           
                            <li>
                                <a href="/">Kontakt</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col">                        
                        <img src={sm} alt="Logo" />
                        <ul className="list-unstyled">
                            <li>
                                <Button variant="outlined" a href="http://www.instagram.com">
                                    <InstagramIcon sx={{ fontSize: '36px' }} />
                                </Button>
                            </li>
                            <li>
                                <Button variant="outlined" a href="http://www.facebook.se">
                                    <FacebookIcon sx={{ fontSize: '36px' }} />
                                </Button>
                            </li>
                            <li>
                                <Button variant="outlined" a href="http://www.linkedin.com">
                                    <LinkedInIcon sx={{ fontSize: '36px' }} />
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} VeckoPoängen | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;