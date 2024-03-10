import "./Features.scss";
import features from "../../../../public/features.png"

const Features = () => {
    return (
        <section className="features">
            <div className="container">
                <div className="textContainer">
                    <h2>UNA CANTIDAD DE SERVICIOS INCOMPARABLE EN LA PALMA DE TU MANO.</h2>
                </div>
                <div className="imgContainer">
                    <img src={features} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Features