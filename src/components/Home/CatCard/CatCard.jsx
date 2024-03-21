import { Link } from "react-router-dom"
import "./CatCard.scss"

const CatCard = ({item}) => {
    return (
        // CATEGORY CARD
        <Link to={"/gigs?cat=design"} className="card-link" >
            <section className="cat-card">
                <img src={item.img} alt={item.title} />
                <span className="title">{item.title}</span>
                <span className="desc">{item.desc}</span>
            </section>
        </Link>
    )
}

export default CatCard