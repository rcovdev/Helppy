import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const isActive = () => { 
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

    const currentUser = {
        id: 1,
        img: "https://lh3.googleusercontent.com/ogw/AF2bZyjT8zY3J2l5iRpSneFDfRVp66XjjwRS5_LRIXBr=s32-c-mo",
        username: "Cova",
        isHelpper: true
    };

    return (
        <header className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to={"/"} className="link">
                        <span className="text">helppy</span>
                        <span className="dot">.</span>
                    </Link>
                </div>
                <nav className="links">
                    <span>Explorar</span>
                    <span>Español</span>
                    {!currentUser?.isHelpper && <Link to={"/register"} className="link">Conviertete Helpper</Link>}
                    {!currentUser && <Link to={"/login"} className="link">Iniciar Sesión</Link>}
                    {!currentUser && <button className={active && "active"}>Registrate</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={currentUser.img} alt="" />
                            <span>{currentUser?.username}</span>
                            {open && (
                                <div className="options">
                                    {
                                        currentUser?.isHelpper && (
                                            <>
                                                <Link to={"/events"} className="link">Eventos</Link>
                                                <Link to={"/new-event"} className="link">Nuevo Evento</Link>
                                            </>
                                    )}
                                    <Link to={"/orders"} className="link">Eventos Activos</Link>
                                    <Link to={"/messages"} className="link">Mensajes</Link>
                                    <span>Cerrar Sesión</span>
                                </div>
                            )}
                        </div>
                    )}
                </nav>
            </div>
            {active && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link" to={"/"}>
                            SERVICIOS ELÉCTRICOS
                        </Link>
                        <Link className="link" to={"/"}>
                            PLOMERÍA
                        </Link>
                        <Link className="link" to={"/"}>
                            CARPINTERÍA
                        </Link>
                        <Link className="link" to={"/"}>
                            JARDINERÍA
                        </Link>
                        <Link className="link" to={"/"}>
                            LIMPÍEZA
                        </Link>
                        <Link className="link" to={"/"}>
                            PINTURA DOMÉSTICA
                        </Link>
                        <Link className="link" to={"/"}>
                            MECÁNICOS
                        </Link>
                        <Link className="link" to={"/"}>
                            MASCOTAS
                        </Link>
                    </div>
                </>
            )}
        </header>
    )
}

export default Navbar