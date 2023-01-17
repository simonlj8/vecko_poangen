import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

function Footer() {
    return (
        <>
            <div className="footer" >

                <div>
                    <nav className="Footer">
                        <ul>
                            <li>
                                <a href="/" className='game'> Hem </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000" className="highscore"> Hem </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000" className="info"> Hem </a>
                            </li>
                            <li>
                                <Button variant="outlined" a href="http://www.instagram.com">
                                    <InstagramIcon sx={{ fontSize: '46px' }} />
                                </Button>
                            </li>
                            <li>
                                <Button variant="outlined" a href="http://www.facebook.se">
                                    <FacebookIcon sx={{ fontSize: '46px' }} />
                                </Button>
                            </li>
                            <li>
                                <Button variant="outlined" a href="http://www.linkedin.com">
                                    <LinkedInIcon sx={{ fontSize: '46px' }} />
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Footer;