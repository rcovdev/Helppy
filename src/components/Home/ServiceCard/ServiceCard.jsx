// IMPORT STYLES
import { Link } from "react-router-dom";
import "./ServiceCard.scss";

// SERVICE CARD COMPONENT
const ServiceCard = ({item}) => {
    return (
        // ITEM CONTAINER
        <div className="slider-item">
            <img src={item.img} alt="" />
            <span className="line"></span>
            <h3>{item.title}</h3>
        </div>
    )
}

export default ServiceCard