import Slider from "react-slick";
import "./SlideShow.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cards } from "../../../data";
import CategoryCard from "../../../components/Home/CategorySlide/CategorySlide";

const SlideShow = () => {
    let settings = {
        slidesToShow: 5
    }
    return (
        <section className="slide-show">
            <div className="container">
                <div className="wrapper">
                    <Slider {...settings}>
                        {cards.map(card => (
                            <CategoryCard item={card} key={card.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default SlideShow