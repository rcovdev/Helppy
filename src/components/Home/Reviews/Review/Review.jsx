import "./Review.scss";
import { MdVerified } from "react-icons/md";

const Review = ({item}) => {
    return (
        <div className="reviews-slider-item">
            <div className="review-image">
                <img src={item.img} alt="" />
            </div>
            <div className="review-container">
                <div className="review-wrapper">
                    <div className="review-top-container">
                        <img src={item.userPP} alt="" />
                        <h5>{item.username}</h5>
                        <MdVerified className="review-verified-icon" />
                        <span></span>
                        <p>{item.service}</p>
                    </div>
                    <div className="review-mid-container">
                        <p>{item.review}</p>
                    </div>
                    <div className="review-bot-container">
                        <p>Service Provided By:</p>
                        <img src={item.helpperPP} alt="" />
                        <h5>{item.helpperUsername}</h5>
                        <MdVerified className="review-verified-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review