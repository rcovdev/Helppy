import "./Navbar.scss";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container">
                <div className="logo">
                    <span className="text">helppy</span>
                    <span className="dot">.</span>
                </div>
                <nav className="links">
                    <span>Explorar</span>
                    <span>Conviertete Helpper</span>
                    <span>Iniciar Sesión</span>
                    <button>Registrate</button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar