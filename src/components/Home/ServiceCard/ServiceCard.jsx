// IMPORT STYLES
import { Link } from "react-router-dom";
import "./ServiceCard.scss";

// SERVICE CARD COMPONENT
const ServiceCard = ({item}) => {
    return (
        // ITEM CONTAINER
        <div className="slider-item">
            <Link className="card-link" to={"/gigs?cat=design"}>
            <img src={item.img} alt="" />
            <div className="title-container">
                <h3>{item.title}</h3>
            </div>
            <div className="desc-container">
                <div className="line"></div>
                <span>{item.desc}</span>
            </div>
            </Link>
        </div>
    )
}

export default ServiceCard