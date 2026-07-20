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
                            <a href="">
                                Servizi
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Come lavoriamo
                            </a>
                        </li>
                        <li>
                            <a href="">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="">
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