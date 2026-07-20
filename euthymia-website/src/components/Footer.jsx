import imageLogo from '../assets/EUTHYMIALOGOSALVIA.svg'

function Footer() {
    return (
        <section>

            <div className="container">

                <div className="footer-brand">
                    <img src={imageLogo} alt="Foto Logo Footer" />
                </div>

                <div className="footer-links">

                    <div className='footer-nav'>

                        <nav>
                            <ul>
                                <li>
                                    <a href="#hero">Home</a>
                                </li>

                                <li>
                                    <a href="#services">Servizi</a>
                                </li>

                                <li>
                                    <a href="#portfolio">Portfolio</a>
                                </li>

                                <li>
                                    <a href="#contacts">Contatti</a>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div className="footer-social">

                        <ul>

                            <li>Instagram</li>
                            <li>Watshapp</li>

                        </ul>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>
                        © 2026 Euthymia. Tutti i diritti riservati.
                    </p>

                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>

                </div>


            </div>

        </section>
    )
}

export default Footer