import { FaSearch } from "react-icons/fa";

const Search = ({ className }) => {
    return (
        <div className={className}>
            <div className="search-input">
                <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                <input type="text" placeholder="Service..." />
            </div>
            <div className="button-container">
                <button>Search</button>
            </div>
        </div>
    )
}

export default Search