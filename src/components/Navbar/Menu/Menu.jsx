import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
import { LINKS } from "../../../data.jsx";

const Menu = () => {
    const [display, setDisplay] = useState(false);

    const displaySearch = () => {
        window.scrollY > 280 ? setDisplay(true) : setDisplay(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", displaySearch);

        return () => {
            window.removeEventListener("scroll", displaySearch)
        }
    }, []);

    return (
        <nav className={`navbar__subnav ${display ? "navbar__subnav--visible" : ""}`}>
            <hr />
            <div className="navbar__subnav-menu">
                {LINKS.map(link => (
                    <Link className="navbar__subnav-link" to={link.path} key={link.id}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <hr />
        </nav>
    )
}

export default Menu