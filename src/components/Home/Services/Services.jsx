import "./Services.scss";
import { services } from "../../../data";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <section className="our-services">
            <div className="container">
                {services.map((service) => (
                    <div key={service.id} className="service">
                        <Link to={`/${service.title}`} className="link">
                            <span className="icon">{service.icon}</span>
                            <span className="title">{service.title}</span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services