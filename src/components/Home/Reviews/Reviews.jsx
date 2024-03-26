import "./Reviews.scss";
import LeftArrow from "../../../../public/assets/LeftArrow.svg";
import RightArrow from "../../../../public/assets/RightArrow.svg";
import { useState } from "react";

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

    console.log(currentSlide)

    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews-slider-container">
                    <button className="reviews-slider-prev"><img src={LeftArrow} alt="reviews-slider-previous-arrow" /></button>
                    
                    <button className="reviews-slider-next"><img src={RightArrow} alt="reviews-slider-next-arrow" /></button>
                </div>
            </div>
        </section>
    )
}

export default Reviews