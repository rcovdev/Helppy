// IMPORT STYLES
import "./Business.scss";
// IMPORT IMAGES
import business1 from "../../../../public/images/business1.png";
import business2 from "../../../../public/images/business2.png";
import business3 from "../../../../public/images/business3.png";
// IMPORT ICON
import { FaRegCheckCircle } from "react-icons/fa";

// BUSINESS COMPONENT
const Business = () => {
    return (
        <div className="business">
            <div className="container">
                <div className="wrapper">
                    {/* IMG CONTAINER */}
                    <div className="img-container">
                        <img className="business1" style={{ marginTop: "4rem" }} src={business1} alt="business1_img" />
                        <img className="business2" style={{ marginBottom: "5rem" }} src={business2} alt="business2_img" />
                        <img className="business3" src={business3} alt="business3_img" />
                    </div>
                    {/* CONTENT CONTAINER */}
                    <div className="text-container">
                        <span className="text">helppy</span>
                        <span className="dot">.</span>
                        <span className="extra">Business Solutions</span>
                        <h3 className="slogan">Easy solutions and top talent for your business.</h3>
                        <div className="title">
                            <FaRegCheckCircle className="icon" />
                            Helpper Pro.
                        </div>
                        <p>
                            Find amazing experts and the perfect tools for your projects.
                        </p>
                        <div className="title">
                            <FaRegCheckCircle className="icon" />
                            Helpper Certified.
                        </div>
                        <p>
                            Build a space where your brand connects with top talent.
                        </p>
                        <div className="title">
                            <FaRegCheckCircle className="icon" />
                            Helppy Enterprise.
                        </div>
                        <p>
                            Easily handle your awesome team and find new stars with a complete toolbox.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business