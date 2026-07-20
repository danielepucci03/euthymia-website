function Contacts() {
    return (
        <section id="contact">

            <div className="container">

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

export default Contacts