import "./Review.scss";
import { MdVerified } from "react-icons/md";

const Review = ({item}) => {
    return (
        <div className="review__slider-item">
            <div className="review__slider-img-container">
                <img className="review__slider-img" src={item.img} alt="review-slider-img" />
            </div>
            <div className="review__content-container">
                <div className="review__content-wrapper">
                    <div className="review__user-container">
                        <img className="review__user-pp" src={item.userPP} alt="review-user-pp" />
                        <h5 className="review__user-username">{item.username}</h5>
                        <MdVerified className="review__verified-icon" />
                        <span className="review__separator-line"></span>
                        <p className="review__service">{item.service}</p>
                    </div>
                    <div className="review__review-container">
                        <p className="review__review">{item.review}</p>
                    </div>
                    <div className="review__helpper-container">
                        <p className="review__service-provided">Service Provided By:</p>
                        <img className="review__helpper-pp" src={item.helpperPP} alt="review-helpper-pp" />
                        <h5 className="review__helpper-username">{item.helpperUsername}</h5>
                        <MdVerified className="review__verified-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review