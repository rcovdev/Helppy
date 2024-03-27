import "./Featured.scss";
import { FaSearch } from "react-icons/fa";
import featured from "../../../../public/images/featured.png";

const Featured = () => {
    return (
        <section className="featured">
            <div className="featured__container">
                <div className="featured__header">
                    <h1 className="featured__header-heading">FIND THE <b style={{ color: "var(--sky-blue)" }}>BEST & SAFEST SERVICES</b> FOR <b style={{ color: "var(--sky-blue)" }}>ANY OCCASION</b> IN <b style={{ color: "var(--sky-blue)" }}>ANY LOCATION.</b></h1>
                    <div className="featured__search-bar">
                        <div className="featured__search-bar-input">
                            <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                            <input className="featured__search-bar-input-field" type="text" placeholder="Service..." />
                        </div>
                        <div className="featured__button-container">
                            <button className="featured__search-bar-button">Search</button>
                        </div>
                    </div>
                    <div className="featured__popular-services">
                        <span>Popular: </span>
                        <button>GARDENER</button>
                        <button>ELECTRICIAN</button>
                        <button>PLUMBER</button>
                        <button>PAINTER</button>
                    </div>
                </div>
                <div className="featured__hero-img-container">
                    <img className="featured__hero-img" src={featured} alt="featured-hero-img" />
                </div>
            </div>
        </section>
    )
}

export default Featured