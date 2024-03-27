import "./Reviews.scss";
import LeftArrow from "../../../../public/assets/LeftArrow.svg";
import RightArrow from "../../../../public/assets/RightArrow.svg";
import { useState } from "react";
import { reviews } from "../../../data";
import Review from "./Review/Review";


const Reviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    const nextSlide = () => {
        if (currentSlide < 3) {
            setCurrentSlide(currentSlide + 1)
        }

        if (currentSlide === 3) {
            setCurrentSlide(0)
        }
    }

    return (
        <section className="reviews">
            <div className="reviews__container">
                <div className="reviews__slider-container">
                    <button className="reviews__prev-slide-button" onClick={prevSlide}><img className="reviews__prev-slide-button-icon" src={LeftArrow} alt="reviews-slider-previous-arrow" /></button>
                    <div className="reviews__slider-wrapper">
                        <div className="reviews__slider-track" style={{ transform: `translateX(-${currentSlide * 87.5}rem)`}}>
                            {reviews.map(review => (
                                <Review key={review.id} item={review}/>
                            ))}
                        </div>
                    </div>
                    <button className="reviews__next-slide-button" onClick={nextSlide}><img className="reviews__next-slide-button-icon" src={RightArrow} alt="reviews-slider-next-arrow" /></button>
                </div>
            </div>
        </section>
    )
}

export default Reviews