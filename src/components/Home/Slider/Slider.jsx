import { useState } from 'react';
import prevArrow from "../../../../public/LeftArrow.svg"
import nextArrow from "../../../../public/RightArrow.svg"
import './Slider.scss';
import CategorySlide from "../../Home/CategorySlide/CategorySlide";
import { cards } from "../../../data";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const visibleItemsCount = 5;

    const prevSlide = () => {
        setCurrentSlide((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : cards.length - visibleItemsCount
        );
    };

    const nextSlide = () => {
        setCurrentSlide((prevIndex) => 
            prevIndex < cards.length - visibleItemsCount ? prevIndex + 1 : 0
        );
    };

    const visibleItems = cards.slice(currentSlide, currentSlide + visibleItemsCount);

    return (
        <div className="slider">
            <div className="container">
                <div className="slider-container">
                    <div className="slider-prev" onClick={prevSlide}>
                        <img src={prevArrow} alt="" />
                    </div>
                    <div className="slider-track">
                        {visibleItems.map(card => (
                            <CategorySlide item={card} key={card.id}/>
                        ))}
                    </div>
                    <div className="slider-next" onClick={nextSlide}>
                        <img src={nextArrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Slider;