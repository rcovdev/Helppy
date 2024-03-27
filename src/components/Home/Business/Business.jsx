import "./Business.scss";
import business1 from "../../../../public/images/business1.png";
import business2 from "../../../../public/images/business2.png";
import business3 from "../../../../public/images/business3.png";
import { FaRegCheckCircle } from "react-icons/fa";

const Business = () => {
    return (
        <div className="business">
            <div className="business__container">
                <div className="business__wrapper">
                    <div className="business__img-container">
                        <img className="business__img-1" style={{ marginTop: "4rem" }} src={business1} alt="bussines-pet-grooming-img" />
                        <img className="business__img-2" style={{ marginBottom: "5rem" }} src={business2} alt="business-custom-woodwork-img" />
                        <img className="business__img-3" src={business3} alt="business-plumbing-img" />
                    </div>
                    <div className="business__items-container">
                        <span className="business__logo-text">helppy</span>
                        <span className="business__logo-dot">.</span>
                        <span className="bussines__logo-extension">Business Solutions</span>
                        <h3 className="business_heading">Easy solutions and top talent for your business.</h3>
                        <div className="business__item-title">
                            <FaRegCheckCircle className="business__item-icon" />
                            Helpper Pro.
                        </div>
                        <p className="business__item-description">
                            Find amazing experts and the perfect tools for your projects.
                        </p>
                        <div className="business__item-title">
                            <FaRegCheckCircle className="business__item-icon" />
                            Helpper Certified.
                        </div>
                        <p className="business__item-description">
                            Build a space where your brand connects with top talent.
                        </p>
                        <div className="business__item-title">
                            <FaRegCheckCircle className="business__item-icon" />
                            Helppy Enterprise.
                        </div>
                        <p className="business__item-description">
                            Easily handle your awesome team and find new stars with a complete toolbox.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business