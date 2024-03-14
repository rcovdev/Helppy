import "./Slide.scss";
import { Slider } from "infinite-react-carousel";

const Slide = ({children, slidesToShow, centerMode}) => {
    return (
        <section className="slide">
            <div className="container">
                {/* SLIDER */}
                <Slider slidesToShow={slidesToShow} centerMode={centerMode}>
                    {children}
                </Slider>
            </div>
        </section>
    )
}

export default Slide