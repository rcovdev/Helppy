import "./ServiceCard.scss";
import { Link } from "react-router-dom";

const ServiceCard = ({item}) => {
    return (
        <div className="service-card">
            <Link className="service-card__link" to={"/gigs?cat=design"}>
            <img className="service-card__img" src={item.img} alt="" />
            <div className="service-card__service-title-container">
                <h2 className="service-card__title">{item.title}</h2>
            </div>
            <div className="service-card__description-container">
                <span className="service-card__description">{item.desc}</span>
            </div>
            </Link>
        </div>
    )
}

export default ServiceCard