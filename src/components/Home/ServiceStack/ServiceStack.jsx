import "./ServiceStack.scss";
import demo from "../../../../public/images/demo.png";

const ServiceStack = () => {
    return (
        <section className="service-stack">
            <div className="service-stack__container">
                <div className="service-stack__wrapper">
                    <div className="service-stack__content-container">
                        <h6 className="service-stack__content-heading">
                            helppy
                            <span className="service-stack__content-heading-extension"> service stack</span>
                            <span className="service-stack__content-heading-dot">.</span>
                        </h6>
                        <p className="service-stack__content-slogan">
                            <b>Transform instantly</b> with <i>expert services.</i>
                        </p>
                        <span className="service-stack__content-extension">
                            Crafted by experts, personalized by you.
                        </span>
                        <button className="service-stack__content-button">
                            Try Helppy Service Stack
                        </button>
                    </div>
                    <div className="service-stack__img-container">
                        <img className="service-stack__img" src={demo} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceStack