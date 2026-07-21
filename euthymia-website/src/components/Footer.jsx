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

                <div className="contact-intro">

                    <h2>
                        Parliamo della tua attività
                    </h2>

                    <p>
                        Scrivici per raccontarci il tuo progetto e capire come possiamo aiutarti.
                    </p>

                </div>

                <div className="contact-list">

                    <div className="contact-item">
                        <h3>WhatsApp</h3>

                        <a
                            href="https://wa.me/393291624932"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Scrivici su WhatsApp
                        </a>
                    </div>

                    <div className="contact-item">
                        <h3>Instagram</h3>

                        <a
                            href="https://www.instagram.com/_.danielepucci._"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            @_.danielepucci._
                        </a>
                    </div>

                    <div className="contact-item">
                        <h3>Telefono</h3>

                        <a href="tel:+393291624932">
                            +39 329 162 4932
                        </a>
                    </div>

                    <div className="contact-item">
                        <h3>Email</h3>

                        <a href="mailto:danielepucci03@gmail.com">
                            danielepucci03@gmail.com
                        </a>
                    </div>

                </div>


            </div>

        </section>
    )
}

export default Footer