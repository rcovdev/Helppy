import { FaSearch } from "react-icons/fa";

const Search = ({ className }) => {
    return (
        <div className={className}>
            <div className="searchInput">
                <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                <input type="text" placeholder="Servicio..." />
            </div>
            <div className="buttonContainer">
                <button>Buscar</button>
            </div>
        </div>
    )
}

export default Search