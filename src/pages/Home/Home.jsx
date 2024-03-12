// IMPORT STYLES
import "./Home.scss";
// IMPORT DATA
import { cards } from "../../data";
// IMPORT COMPONENTS
import Featured from "../../components/Home/Featured/Featured";
import Slide from "../../components/Home/Slide/Slide";
import CatCard from "../../components/Home/CatCard/CatCard";
import Features from "../../components/Home/Features/Features";

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
        </section>
    )
}

export default Home