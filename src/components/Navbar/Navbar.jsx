import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [display, setDisplay] = useState(false);
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

    const displaySearch = () => {
        window.scrollY > 280 ? setDisplay(true) : setDisplay(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", displaySearch);

        return () => {
            window.removeEventListener("scroll", displaySearch)
        }
    }, []);

    const currentUser = {
        id: 1,
        img: "https://lh3.googleusercontent.com/ogw/AF2bZyjT8zY3J2l5iRpSneFDfRVp66XjjwRS5_LRIXBr=s32-c-mo",
        username: "Cova",
        isHelpper: true
    };

    return (
        <>
        {/* NAVBAR */}
        <header className={active ? "navbar active" : "navbar"}>
            <div className="container">
                {/* LOGO */}
                <a className="logo">
                    <Link to={"/"} className="link">
                        <span className="text">helppy</span>
                        <span className="dot">.</span>
                    </Link>
                </a>
                {/* SEARCH BAR */}
                <div className="search-container">
                    <Search className={display ? "search show" : "search"} />
                </div>
                {/* LINKS */}
                <nav className="links">
                    <span>Helppy Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isHelpper && <Link to={"/register"} className="link">Become a Helpper</Link>}
                    {!currentUser && <Link to={"/login"} className="link">Sign In</Link>}
                    {!currentUser && <button className={active && "active"}>Sign Up</button>}
                    {/* USER MENU IF USER=TRUE */}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src={currentUser.img} alt="" />
                            <span>{currentUser?.username}</span>
                            {open && (
                                // USER MENU OPTIONS
                                <ul className="options">
                                    {
                                        currentUser?.isHelpper && (
                                            <>
                                                <li><Link to={"/events"} className="link">Events</Link></li>
                                                <li><Link to={"/new-event"} className="link">New Event</Link></li>
                                            </>
                                    )}
                                    <li><Link to={"/orders"} className="link">Active Events</Link></li>
                                    <li><Link to={"/messages"} className="link">Messages</Link></li>
                                    <li><span>Log Out</span></li>
                                </ul>
                            )}
                        </div>
                    )}
                </nav>
            </div>
        </header>
        {/* ANIMATED LINKS */}
        <nav className={display ? "services show" : "services"}>
            <Menu className="menu" />
        </nav>
        </>
    )
}

export default Navbar