import './Footer.css'

function Footer() {
    return (
        <>
            <div className="footer" >
            
            <div>
                <nav className="Footer">
                    <ul>
                        <li>
                            <a href="/" className='game'> Spela </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000" className="highscore"> Poänglista </a>
                        </li>
                        <li>
                            <a href="http://localhost:3000" className="info"> Information </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        </>
    )  
}

export default Footer;