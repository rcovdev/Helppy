import "./Featured.scss";
import { FaSearch } from "react-icons/fa";
import featured from "../../../public/featured.png";

const Featured = () => {
    return (
        <section className="featured">
            <div className="container">
                <div className="hero">
                    <h1>ENCUENTRA LOS MEJORES Y MÁS SEGUROS SERVICIOS PARA CUALQUIER OCASIÓN.</h1>
                    <div className="search">
                        <div className="searchInput">
                            <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                            <input type="text" placeholder="Servicio..." />
                        </div>
                        <div className="buttonContainer">
                            <button>Buscar</button>
                        </div>
                    </div>
                    <div className="popular">
                        <span>Popular: </span>
                        <button>Jardinero</button>
                        <button>Electicista</button>
                        <button>Plomero</button>
                        <button>Pintor</button>
                    </div>
                </div>
                <div className="image">
                    <img src={featured} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Featured