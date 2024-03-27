import "./Services.scss";
import { services } from "../../../data";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <section className="services">
            <div className="services__container">
                {services.map((service) => (
                    <div key={service.id} className="services__service">
                        <Link to={`/${service.title}`} className="services__service-link">
                            <span className="services__service-link-icon">{service.icon}</span>
                            <span className="services__service-link-title">{service.title}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services