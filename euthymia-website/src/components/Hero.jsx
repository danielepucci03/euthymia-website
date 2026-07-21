import logo from '../assets/logo-ehutimia.svg'

function Hero() {
    return (

        <section id='Hero'>

            <div className="container container-hero">

                <div className="hero-content">

                    <h1>
                        La tua attività merita tutta la tua attenzione
                    </h1>
                    <p>
                        Ai tuoi social pensiamo noi...
                    </p>
                    <button>
                        Parliamo del tuo progetto
                    </button>

                </div>

                <div className="hero-image">
                    <img src={logo} alt="Logo Euthymia" />
                </div>

            </div>

        </section>

    )
}

export default Hero