// IMPORT STYLES
import "./Home.scss";
// IMPORT COMPONENTS
import Featured from "../../components/Home/Featured/Featured";
import SlideShow from "../../components/Home/SlideShow/SlideShow";
import Features from "../../components/Home/Features/Features";
import Services from "../../components/Home/Services/Services";
import Business from "../../components/Home/Business/Business";
import Slider from "../../components/Home/Slider/Slider"

const Home = () => {
    return (
        <section className="home">
            {/* FEATURED COMPONENT */}
            <Featured />
            {/* CATEGORY SLIDER COMPONENT */}
            <Slider />
            {/* FEATURES COMPONENT */}
            <Features />
            {/* OUR SERVICES */}
            <Services />
            {/* BUSINESS COMPONENT */}
            <Business />
        </section>
    )
}

export default Home