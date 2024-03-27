import "./Navbar.scss";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Search from "./Search/Search";
import Menu from "./Menu/Menu";

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

    const currentUser = false;

    return (
        <>
            <header className={`navbar ${active ? "navbar--active" : ""}`}>
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <Link to={"/"} className="navbar__link">
                            <span className="navbar__logo-text">helppy</span>
                            <span className="navbar__logo-dot">.</span>
                        </Link>
                    </div>
                    <Search />
                    <nav className="navbar__links">
                        <span>Helppy Business</span>
                        <span>Explore</span>
                        <span>English</span>
                        {!currentUser?.isHelpper && <Link to={"/register"} className="navbar__register">Become a Helpper</Link>}
                        {!currentUser && <Link to={"/login"} className="navbar__login">Sign In</Link>}
                        {!currentUser && <button className={`navbar__signup-button ${active ? "navbar__signup--active" : ""}`}>Sign Up</button>}
                        {currentUser && (
                            <div className="navbar__user" onClick={() => setOpen(!open)}>
                                <img className="navbar__user-img" src={currentUser.img} alt="navbar-user-profile-picture" />
                                <span className="navbar__username">{currentUser?.username}</span>
                                {open && (
                                    <ul className="navbar__user-options">
                                        {currentUser?.isHelpper && (
                                            <>
                                                <li><Link to={"/events"} className="navbar__events">Events</Link></li>
                                                <li><Link to={"/new-event"} className="navbar__new-event">New Event</Link></li>
                                            </>
                                        )}
                                        <li><Link to={"/orders"} className="navbar__active-events">Active Events</Link></li>
                                        <li><Link to={"/messages"} className="navbar__messages">Messages</Link></li>
                                        <li><span className="navbar__logout">Log Out</span></li>
                                    </ul>
                                )}
                            </div>
                        )}
                    </nav>
                </div>
            </header>
            <Menu />
        </>
    )
}

export default Navbar