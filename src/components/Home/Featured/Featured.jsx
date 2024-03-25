// IMPORT STYLES
import "./Featured.scss";
// IMPORT ICON
import { FaSearch } from "react-icons/fa";
// IMPORT IMAGE
import featured from "../../../../public/images/featured.png";

// FEATURED COMPONENT
const Featured = () => {
    return (
        <section className="featured">
            <div className="container">
                <div className="hero">
                    {/* SLOGAN */}
                    <h1>FIND THE <b style={{ color: "var(--sky-blue)" }}>BEST & SAFEST SERVICES</b> FOR <b style={{ color: "var(--sky-blue)" }}>ANY OCCASION</b> IN <b style={{ color: "var(--sky-blue)" }}>ANY LOCATION.</b></h1>
                    <div className="search">
                        {/* SEARCH BAR */}
                        <div className="search-input">
                            <FaSearch style={{ color: "var(--blue)", fontSize: "1.2rem", marginLeft: "1rem"}} />
                            <input type="text" placeholder="Service..." />
                        </div>
                        <div className="button-container">
                            <button>Search</button>
                        </div>
                    </div>
                    {/* POPULAR SECTION */}
                    <div className="popular">
                        <span>Popular: </span>
                        <button>GARDENER</button>
                        <button>ELECTRICIAN</button>
                        <button>PLUMBER</button>
                        <button>PAINTER</button>
                    </div>
                </div>
                {/* IMAGE */}
                <div className="image">
                    <img src={featured} alt="man_img" />
                </div>
            </div>
        </section>
    )
}

export default Featured