import "./Featured.scss";
import { FaSearch } from "react-icons/fa";
import featured from "../../../../public/featured.png";

const Featured = () => {
    return (
        <section className="featured">
            <div className="container">
                <div className="hero">
                    <h1>FIND THE <b style={{ color: "var(--sky-blue)" }}>BEST & SAFEST SERVICES</b> FOR <b style={{ color: "var(--sky-blue)" }}>ANY OCCASION</b> IN <b style={{ color: "var(--sky-blue)" }}>ANY LOCATION.</b></h1>
                    <div className="search">
                        <div className="searchInput">
                            <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                            <input type="text" placeholder="Service..." />
                        </div>
                        <div className="buttonContainer">
                            <button>Search</button>
                        </div>
                    </div>
                    <div className="popular">
                        <span>Popular: </span>
                        <button>GARDENER</button>
                        <button>ELECTRICIAN</button>
                        <button>PLUMBER</button>
                        <button>PAINTER</button>
                    </div>
                </div>
                <div className="image">
                    <img src={featured} alt="man_img" />
                </div>
            </div>
        </section>
    )
}

export default Featured