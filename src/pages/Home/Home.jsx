// IMPORT STYLES
import "./Home.scss";
// IMPORT DATA
import { cards } from "../../data";
// IMPORT COMPONENTS
import Featured from "../../components/Home/Featured/Featured";
import Slide from "../../components/Home/Slide/Slide";
import CatCard from "../../components/Home/CatCard/CatCard";
import Features from "../../components/Home/Features/Features";
import Business from "../../components/Home/Business/Business";
import Services from "../../components/Home/Services/Services";

const Home = () => {
    return (
        <section className="home">
            {/* FEATURED COMPONENT */}
            <Featured />
            {/* CATEGORY SLIDER COMPONENT */}
            <Slide slidesToShow={5} centerMode={true}>
                {cards.map(card => (
                    <CatCard item={card} key={card.id}/>
                ))}
            </Slide>
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