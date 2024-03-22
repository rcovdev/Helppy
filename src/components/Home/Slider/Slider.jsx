import "./Slider.scss";

const Slider = () => {
    return (
        <section className="slider">
            <div className="container">
                <swiper-container>
                    <swiper-slide>
                        slide 1
                    </swiper-slide>
                    <swiper-slide>
                        slide 2
                    </swiper-slide>
                    <swiper-slide>
                        slide 3
                    </swiper-slide>
                </swiper-container>
            </div>
        </section>
    )
}

export default Slider