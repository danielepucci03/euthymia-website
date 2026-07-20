import imageLogo from '../assets/euthymia.svg'

function Navbar() {
    return (
        <nav>

            <div className="container">

                <div className="logo-nav">
                    <img src={imageLogo} alt="Logo Euthymia" />
                </div>

                <div className="menu-nav">

                    <ul>

                        <li>
                            <a href="#services">
                                Servizi
                            </a>
                        </li>
                        <li>
                            <a href="#process">
                                Come lavoriamo
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contacts">
                                Contatti
                            </a>
                        </li>

                    </ul>

                </div>

            </div>



        </nav>
    )
}

export default Navbar