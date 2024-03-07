import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import Slide from "../../components/Slide/Slide";
import CatCard from "../../components/CatCard/CatCard";
import { cards } from "../../data";

const Home = () => {
    return (
        <section className="home">
            <Featured />
            <Slide slidesToShow={5} centerMode={true}>
                {cards.map(card => (
                    <CatCard item={card} key={card.id}/>
                ))}
            </Slide>
        </section>
    )
}

export default Home