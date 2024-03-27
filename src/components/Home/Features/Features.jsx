import "./Features.scss";
import features from "../../../../public/images/features.jpg";
import { FaRegCheckCircle } from "react-icons/fa";

const Features = () => {
    return (
        <section className="features">
            <div className="features__container">
                <div className="features__wrapper">
                    <div className="features__items-container">
                        <h2>AN INCOMPARABLE AMOUNT OF SERVICES IN THE PALM OF YOUR HAND.</h2>
                        <div className="features__feature-title">
                            <FaRegCheckCircle className="features__feature-icon" />
                            Affordable and reliable.
                        </div>
                        <p className="features__feature-description">
                            Get crystal-clear pricing. Forget hourly rates, our services are delivered at fixed project costs.
                        </p>
                        <div className="features__feature-title">
                            <FaRegCheckCircle className="features__feature-icon" />
                            Don't sacrifice quality for speed. Get both.
                        </div>
                        <p className="features__feature-description">
                            Stress-free project handoff, long-term value.
                        </p>
                        <div className="features__feature-title">
                            <FaRegCheckCircle className="features__feature-icon" />
                            Mutual satisfaction, secure payments.
                        </div>
                        <p className="features__feature-description">
                            Transparent pricing, secure payments. Funds released when both parties are satisfied.
                        </p>
                        <div className="features__feature-title">
                            <FaRegCheckCircle className="features__feature-icon" />
                            Our expert support is available 24/7.
                        </div>
                        <p className="features__feature-description">
                            Leverage the expertise of our 24/7 support team, available to resolve issues promptly, anytime and anywhere.
                        </p>
                        
                    </div>
                    <div className="features__img-container">
                        <img className="features__img" src={features} alt="features_img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features