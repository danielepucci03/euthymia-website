import imageLogo from '../assets/EUTHYMIALOGOSALVIA.svg'
import { BsInstagram, BsWhatsapp, BsTelephone, BsMailbox } from "react-icons/bs";


function Footer() {
    return (
        <section>

            <div className="container">

                <div className="container-footer">

                    <div className="contact-list">

                        <div className="contact-item">

                            <a href="tel:+393291624932">
                                <BsTelephone />
                            </a>
                        </div>

                        <div className="contact-item">

                            <a href="mailto:danielepucci03@gmail.com">
                                <BsMailbox />
                            </a>
                        </div>

                        <div className="contact-item">

                            <a
                                href="https://wa.me/393291624932"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsWhatsapp />
                            </a>
                        </div>

                        <div className="contact-item">

                            <a
                                href="https://www.instagram.com/_.danielepucci._"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BsInstagram />
                            </a>
                        </div>


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