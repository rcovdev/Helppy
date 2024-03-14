import "./Slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({children, slidesToShow, centerMode}) => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initalSlide: 0,
        centerMode: true,
        draggable: false,
        lazyLoad: true,
        centerPadding: "60px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: []
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
                style={{backgroundColor: "red"}}
            />
        )

    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                onClick={onClick}
                style={{backgroundColor: "red"}}
            />
        )
    }

    return (
        <section className="slide">
            <div className="container">
                {/* SLIDER */}
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </section>
    )
}

export default Slide