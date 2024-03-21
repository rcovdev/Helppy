import "./Slider.scss";
import LeftArrow from "../../../../public/LeftArrow.svg";
import RightArrow from "../../../../public/RightArrow.svg";
import CatCard from "../CatCard/CatCard";
import { cards } from "../../../data";

const Slider = () => {
    return (
        <div className="slider">
            <div className="container">
                <span><img src={LeftArrow} alt="previous-button" style={{ width: "2rem" }} /></span>
                <div className="slider-track">
                    <CatCard item={cards} />
                </div>
                <span><img src={RightArrow} alt="previous-button" style={{ width: "2rem" }} /></span>
            </div>
        </div>
    )
}

export default Slider