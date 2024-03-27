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
        <div className="navbar__search-container">
            <div className={`navbar__search ${display ? "navbar__search--visible" : ""}`}>
                <div className="navbar__search-input">
                    <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                    <input className="navbar__search-input-field" type="text" placeholder="Service..." />
                </div>
                <div className="navbar__search-button-container">
                    <button className="navbar__search-button">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search