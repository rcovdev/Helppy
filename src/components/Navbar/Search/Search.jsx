import { FaSearch } from "react-icons/fa";
import "./Search.scss";
import { useEffect, useState } from "react";

const Search = () => {
    const [display, setDisplay] = useState(false);

    const displaySearch = () => {
        window.scrollY > 390 ? setDisplay(true) : setDisplay(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", displaySearch);

        return () => {
            window.removeEventListener("scroll", displaySearch)
        }
    }, []);

    return (
        <div className="navbar__search-bar-container">
            <div className={`navbar__search-bar ${display ? "navbar__search-bar--visible" : ""}`}>
                <div className="navbar__search-bar-input">
                    <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                    <input className="navbar__search-bar-input-field" type="text" placeholder="Service..." />
                </div>
                <div className="navbar__search-bar-button-container">
                    <button className="navbar__search-bar-button">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search