import "./Slider.scss";
import LeftArrow from "../../../../public/LeftArrow.svg";
import RightArrow from "../../../../public/RightArrow.svg";
import { useRef } from "react";
import { useState } from "react";

const Slider = () => {
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
                        <div className="card">
                            1
                        </div>
                        <div className="card">
                            2
                        </div>
                        <div className="card">
                            3
                        </div>
                        <div className="card">
                            4
                        </div>
                        <div className="card">
                            5
                        </div>
                        <div className="card">
                            6
                        </div>
                        <div className="card">
                            7
                        </div>
                        <div className="card">
                            8
                        </div>
                        <div className="card">
                            9
                        </div>
                        <div className="card">
                            10
                        </div>
                        <div className="card">
                            11
                        </div>
                    </div>
                    <button className="next-button" onClick={nextSlide}><img src={RightArrow} alt="next-slide-button" /></button>
                </div>
            </div>
        </section>
    )
}

export default Slider