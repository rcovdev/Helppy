import "./Features.scss";
import features from "../../../../public/features.jpg"
import { FaRegCheckCircle } from "react-icons/fa";

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="textContainer">
                    <h2>AN INCOMPARABLE AMOUNT OF SERVICES IN THE PALM OF YOUR HAND.</h2>
                    <div className="item">
                        <FaRegCheckCircle className="icon" />
                        Affordable and reliable.
                    </div>
                    <p>
                        Get crystal-clear pricing. Forget hourly rates, our services are delivered at fixed project costs.
                    </p>
                    <div className="item">
                        <FaRegCheckCircle className="icon" />
                        Don't sacrifice quality for speed. Get both.
                    </div>
                    <p>
                        Stress-free project handoff, long-term value.
                    </p>
                    <div className="item">
                        <FaRegCheckCircle className="icon" />
                        Mutual satisfaction, secure payments.
                    </div>
                    <p>
                        Transparent pricing, secure payments. Funds released when both parties are satisfied.
                    </p>
                    <div className="item">
                        <FaRegCheckCircle className="icon" />
                            Our expert support is available 24/7.
                    </div>
                    <p>
                        Leverage the expertise of our 24/7 support team, available to resolve issues promptly, anytime and anywhere.
                    </p>
                    
                </div>
                <div className="imgContainer">
                    <img src={features} alt="features_img" />
                </div>
            </div>
        </section>
    )
}

export default Features