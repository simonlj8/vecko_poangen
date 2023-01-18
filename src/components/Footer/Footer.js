import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

function Footer() {
    return (
        <div>
            <div className="footer" >

                <nav className='left'>
                   
                        <ul>
                            <li>
                                <a href="/"> Hem </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000"> Hem </a>
                            </li>
                            <li>
                                <a href="http://localhost:3000"> Hem </a>
                            </li>
                            </ul>
                            </nav>
                            <nav className='right'>
                            <ul>
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
        
    )
}

export default Footer;