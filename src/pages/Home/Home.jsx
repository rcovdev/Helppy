import { popular } from "../../data";
import Featured from "../../components/Home/Featured/Featured";
import Slider from "../../components/Home/Slider/Slider";
import ServiceCard from "../../components/Home/ServiceCard/ServiceCard";
import Features from "../../components/Home/Features/Features";
import Services from "../../components/Home/Services/Services";
import Business from "../../components/Home/Business/Business";
import Reviews from "../../components/Home/Reviews/Reviews";

const Home = () => {
    return (
        <section className="home">
            <Featured />
            <Slider>
                {popular.map(service => (
                    <ServiceCard key={service.id} item={service} />
                ))}
            </Slider>
            <Features />
            <Services />
            <Business />
            <Reviews />
        </section>
    )
}

export default Home