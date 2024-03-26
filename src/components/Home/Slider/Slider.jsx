import "./Slider.scss";
import LeftArrow from "../../../../public/assets/LeftArrow.svg";
import RightArrow from "../../../../public/assets/RightArrow.svg";
import { useRef, useState } from "react";

const Slider = ({children}) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const SLIDER_REF = useRef();

    const nextSlide = () => {
        if (currentSlide < 4) {
            setCurrentSlide(currentSlide + 1);
        }

        if (currentSlide > 0) {
            SLIDER_REF.current.style.transform = "translateX(-88.5rem)";
        }

        if (currentSlide > 1) {
            SLIDER_REF.current.style.transform = "translateX(-106.2rem)";
        }

        if (currentSlide > 2) {
            SLIDER_REF.current.style.transform = "translateX(0px)";
        }
        
        if (currentSlide > 2) {
            setCurrentSlide(1);
        }
    }
        
    const prevSlide = () => {
        if (currentSlide > 1) {
            setCurrentSlide(currentSlide - 1);
        }

        if (currentSlide > 1) {
            SLIDER_REF.current.style.transform = "translateX(0)";
        }

        if (currentSlide > 2) {
            SLIDER_REF.current.style.transform = "translateX(-88.5rem)";
        }
    }

    return (
        <section className="slider">
            <div className="container">
                <button className="prev-button" onClick={prevSlide}><img src={LeftArrow} alt="previous-slide-button" /></button>
                <div className="wrapper">
                    <div className="slider-track" ref={SLIDER_REF}>
                        {children}
                    </div>
                </div>
                <button className="next-button" onClick={nextSlide}><img src={RightArrow} alt="next-slide-button" /></button>
            </div>
        </section>
    )
}

export default Slider